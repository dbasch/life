(ns life.engine)

;; calculates the next generation board
;; for the standard game of life rules
(defn next-iteration [board]
  (let [r (count board)
        c (count (first board))
        neighbors (fn [[cell :as [i j]]]
                    (remove #(= % [i j])
                            (for [x (filter (-> r range set) (range (- i 1) (+ 2 i)))
                                  y (filter (-> c range set) (range (- j 1) (+ 2 j)))]
                              [x y])))
        alive? (fn [[cell :as [i j]]]
                 (nth (nth board i) j))
        gen (fn [cell]
              (let [live-nb (count (filter true? (map alive? (neighbors cell))))]
                (or (= 3 live-nb) (and (alive? cell) (= 2 live-nb)))))
        gen-row (fn [i]
                  (map gen (for [j (range c)] [i j])))]
    (map gen-row (range r))))


;; generates a random matrix of cells
;; true = alive, false = dead
(defn generate-board [x y]
  (for [i (range x)]
    (take y (repeatedly #(zero? (rand-int 5))))))
