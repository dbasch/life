(ns life.client
  (:require [clojure.string :as string]
            [goog.dom :as dom]
            [goog.events :as events]
            [goog.events.EventType :as event-type]
            [life.engine :as le]
            [clojure.browser.repl :as repl]))

(defn log [msg]
  (.log js/console msg))

;; for debugging
(defn nrepl []
  (repl/connect "http://localhost:9000/repl"))

(set! (.-nrepl js/window)
      nrepl)

;; canvas drawing functions
(defn color [red green blue]
  (str "rgb(" (string/join "," [red green blue]) ")"))

(def white (color 255 255 255))
(def gray  (color 169 169 169))
(def black (color 0   0   0))

(defn surface []
  (let [surface (dom/getElement "surface")]
    [(.getContext surface "2d")
     (. surface -width)
     (. surface -height)]))

(defn fill-rect [[surface] [x y width height] fill-color]
  (set! (. surface -fillStyle) fill-color)
  (.fillRect surface x y width height))

(defn stroke-rect [[surface] [x y width height] line-width stroke-color]
  (set! (. surface -strokeStyle) stroke-color)
  (set! (. surface -lineWidth) line-width)
  (.strokeRect surface x y width height))

(defn render [state surface]
  (let [[_ width height] surface
        board (:board state)
        gen (:generation state)
        el (dom/getElement "gens")]
    (fill-rect surface [0 0 width height] white)
    (stroke-rect surface [0 0 width height] 2 black)
    (set! (.-innerHTML el) gen)
    (doseq [x (range (count board))]
      (doseq [y (range (count (first board)))]
        (let [cell-height (quot height (count board))
              cell-width (quot width (count (first board)))
              x-offset (* cell-width x)
              y-offset (* cell-width y)
              alive (nth (nth board x) y)]
          (if alive (fill-rect surface [x-offset y-offset cell-width cell-height] black))
          (stroke-rect surface [x-offset y-offset cell-width cell-height] 2 gray))))))

(defn game [state surface]
  (swap! state (fn [s]
                 (render s surface)
                 (merge s {:board (le/next-iteration (:board s))
                           :generation (inc (:generation s))}))))

(defn reset [state surface]
  (do (swap! state (fn [s]
                     (let [x (:x s)
                           y (:y s)]
                       (merge s {:board (le/generate-board x y)
                                 :generation 0}))))
      (render @state surface)))

(defn click [state surface event]
  (let [clicked (-> event .-target .-id)
        handle (:handle @state)]
    (cond (= clicked "start")
          (do
            (if (nil? handle)
              (let [new-handle (.setInterval js/window #(game state surface) 250)]
                (swap! state merge {:handle new-handle})
                (set! (.-innerHTML (dom/getElement "start")) "Pause game"))
              (do
                 (.clearInterval js/window handle)
                  (set! (.-innerHTML (dom/getElement "start")) "Run game")
                  (swap! state merge {:handle nil}))))
          (= clicked "reset") (reset state surface))))

(defn ^:export init [x y interval]
  (let [surface (surface)
        state (atom {:x x :y y})]
    (reset state surface)
    (events/listen js/window event-type/CLICK #(click state surface %))))
