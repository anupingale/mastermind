(ns mastermind.logic)

(def colors (range 8))

(defn generate-code []
  (take 5 (shuffle colors)))

(defn get-reds [code pattern]
  (count (filter true? (map #(= %1 %2) code pattern))))

(defn get-whites [code pattern]
  (- (count (filter true? (map #(some (partial = %1) code) (set pattern)))) (get-reds code pattern)))

(defn get-result [code pattern]
  (into [] (take 5 (concat (repeat (get-reds code pattern) :r) (repeat (get-whites code pattern) :w) (repeat 5 :other)))))
