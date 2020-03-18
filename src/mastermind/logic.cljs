(ns mastermind.logic)

(def colors (range 8))

(defn generate-code []
  (take 5 (shuffle colors)))

(defn get-reds [c p]
  (count (filter true? (map #(= %1 %2) c p))))

(defn get-whites [c p]
  (- (count (filter true? (map #(some (partial = %1) c) (set p)))) (get-reds c p)))

(defn get-result [c p]
  {:r (get-reds c p)
   :w (get-whites c p)})
