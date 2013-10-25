(ns life
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [goog.events.EventType :as event-type]
            [life-engine :as le]
            [clojure.browser.repl :as repl]))

;; for debugging
(defn nrepl []
  (repl/connect "http://localhost:9000/repl"))

(set! (.-nrepl js/window)
      nrepl)

;; canvas drawing functions
(defn surface []
  (let [surface (dom/getElement "surface")]
    [(.getContext surface "2d")
     (. surface -width)
     (. surface -height)]))

(defn fill-rect [[surface] [x y width height] [r g b]]
  (set! (. surface -fillStyle) (str "rgb(" r "," g "," b ")"))
  (.fillRect surface x y width height))

(defn stroke-rect [[surface] [x y width height] line-width [r g b]]
  (set! (. surface -strokeStyle) (str "rgb(" r "," g "," b ")"))
  (set! (. surface -lineWidth) line-width)
  (.strokeRect surface x y width height))

(defn render [state surface]
  (let [[_ width height] surface
        board (:board state)
        gen (:generation state)
        el (dom/getElement "gens")]
    (fill-rect surface [0 0 width height] [255 255 255])
    (stroke-rect surface [0 0 width height] 2 [0 0 0])
    (set! (.-innerHTML el) gen)
    (doseq [x (range (count board))]
      (doseq [y (range (count (first board)))]
        (let [cell-height (quot height (count board))
              cell-width (quot width (count (first board)))
              x-offset (* cell-width x)
              y-offset (* cell-width y)
              alive (nth (nth board x) y)]
          (if alive (fill-rect surface [x-offset y-offset cell-width cell-height] [0 0 0]))
          (stroke-rect surface [x-offset y-offset cell-width cell-height] 2 [169 169 169]))))))

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
          (if (nil? handle)
            (let [new-handle (.setInterval js/window #(game state surface) 50)]
              (swap! state merge {:handle new-handle})
              (set! (.-innerHTML (dom/getElement "start")) "Pause game"))
            (do (.clearInterval js/window handle)
                (set! (.-innerHTML (dom/getElement "start")) "Run game")
                (swap! state merge {:handle nil})))
          (= clicked "reset") (reset state surface))))

(defn ^:export init [x y interval]
  (let [surface (surface)
        state (atom {:x x :y y})]
    (reset state surface)
    (events/listen js/window event-type/CLICK #(click state surface %))))