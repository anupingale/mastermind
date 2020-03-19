(ns mastermind.core
  (:require
    [reagent.core :as r]
    [mastermind.logic :as l]))
(def colors ["red" "green" "purple" "maroon" "blue" "darkorange" "darkgoldenrod" "black" "gray"])
(def results {:r "red" :w "white"})
(defonce game (r/atom {
                       :code           [1 2 3 4 5]
                       :current-turn   0
                       :attempts       (into [] (repeat 12 {:guess [8 8 8 8 8] :result [:other :other :other :other :other]}))
                       :selected-color 0
                       :won?           false
                       }))

(defn change [index arr] (assoc arr index (:selected-color @game)))

(defn set-color [turn index]
  (swap! game assoc :attempts (update-in (:attempts @game) [turn :guess] (partial change index))))

(defn draw-color [turn index attempt]
  (let [is-clickable (= turn (:current-turn @game))]
    [:div {:style   {:background (str "radial-gradient(circle at 65% 15%, white 1px, " (colors attempt) " 60%)")}
           :class   ["color" (when is-clickable "clickable")]
           :key     index
           :onClick (when is-clickable (partial set-color turn index))}]))

(defn draw-attempt [attempt turn]
  [:div {:class ["attempt" (when (= turn (:current-turn @game)) "current-turn")]}
   (map-indexed (partial draw-color turn) attempt)
   ])

(defn draw-attempt-result-colors [index result]
  [:div {:style {:background-color (results result)}
         :class "result"
         :key   index}
   ])

(defn draw-attempt-result [result]
  [:div {:class "attempt-result"}
   (map-indexed draw-attempt-result-colors result)
   ])

(defn draw-color-palatte [index color]
  [:div {:style   {:background (str "radial-gradient(circle at 65% 15%, white 1px, " color " 60%)")}
         :class   ["color" "clickable" (when (= index (:selected-color @game)) "selected")]
         :onClick (fn [] (swap! game assoc :selected-color index))
         :key     index}])


(defn validate-guess []
  (swap! game assoc :attempts (update-in (:attempts @game) [(:current-turn @game) :result] (partial l/get-result (:code @game) (:guess ((:attempts @game) (:current-turn @game))))))
  (swap! game assoc :won? (l/won? (:code @game) (:guess ((:attempts @game) (:current-turn @game)))))
  (swap! game assoc :current-turn (inc (:current-turn @game)))
  )

(defn draw-board [turn attempt]
  [:div {:class "guess" :key turn}
   (draw-attempt (:guess attempt) turn)
   (draw-attempt-result (:result attempt))
   ])

(defn home-page []
  (let [is-code-complete (every? (partial not= 8) (:guess ((:attempts @game) (:current-turn @game))))]
    [:div {:class "container"}
     [:header {:class "header"} "Mastermind"]
     [:div {:class "board"}
      [:div {:class "secret"}
       [:div {:class "attempt"}
        (when (:won? @game) (map-indexed (partial draw-color nil) (:code @game)))
        ]
       [:div {:class "btn-wrapper"}
        [:button {:class   ["submit-btn" (when-not is-code-complete "disable-btn")]
                  :onClick (when is-code-complete validate-guess)
                  } "submit"]]]
      [:div {:class "guesses"}
       (map-indexed draw-board (:attempts @game))]
      ]
     [:div {:class "color-palette"}
      (map-indexed draw-color-palatte (drop-last colors))
      ]]
    )
  )

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
