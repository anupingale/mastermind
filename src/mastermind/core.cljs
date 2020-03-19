(ns mastermind.core
  (:require
    [reagent.core :as r]))
(def colors ["red" "green" "purple" "maroon" "blue" "darkorange" "darkgoldenrod" "black" "gray"])
(def results {:r "red" :w "white"})
(defonce game (r/atom {
                       :code           [1 2 3 4 5]
                       :current-turn   0
                       :attempts       (into [] (repeat 12 {:guess [8 8 8 8 8] :result []}))
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

(defn draw-color-palatte [index color]
  [:div {:style {:background (str "radial-gradient(circle at 65% 15%, white 1px, " color " 60%)")}
         :class ["color" "clickable" (when (= index (:selected-color @game)) "selected")]
         :key   index}])

(defn draw-attempt [attempt turn]
  [:div {:class "attempt"}
   (map-indexed (partial draw-color turn) attempt)
   ])

(defn draw-empty-attempt-result [index]
  [:div {:class "result"
         :key   index}
   ])

(defn draw-attempt-result-colors [index result]
  [:div {:style {:background-color (results result)}
         :class "result"
         :key   index}
   ])

(defn draw-attempt-result [result]
  [:div {:class "attempt-result"}
   (if (empty? result) (map-indexed draw-empty-attempt-result (:code @game)) (map-indexed draw-attempt-result-colors result))
   ])

(defn draw-board [turn attempt]
  [:div {:class "guess" :key turn}
   (draw-attempt (:guess attempt) turn)
   (draw-attempt-result (:result attempt))
   ])

(defn home-page []
  [:div {:class "container"}
   [:header {:class "header"} "Mastermind"]
   [:div {:class "board"}
    [:div {:class "secret"}
     [:div {:class "code"}]
     [:input {:type "Button" :class "submit-btn"}]
     ]
    [:div {:class "guesses"}
     (map-indexed draw-board (:attempts @game))]
    ]
   [:div {:class "color-palette"}
    (map-indexed draw-color-palatte colors)
    ]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
