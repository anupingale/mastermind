(ns mastermind.core
  (:require
    [reagent.core :as r]))
(def colors ["red" "green" "purple" "maroon" "blue" "darkorange" "darkgoldenrod" "black"])
(def results {:r "red" :w "white"})
(defonce game (r/atom {
                       :code           [1 2 3 4 5]
                       :current-turn   0
                       :attempts       (into [] (repeat 12 {:guess [0 5 3 2 4] :result [:r :w :r :e :w]}))
                       :selected-color 2
                       :won?           false
                       }))

(defn draw-color [index attempt]
  [:div {:style {:background (str "radial-gradient(circle at 65% 15%, white 1px, " (colors attempt) " 60%)")}
         :class "color"
         :key   index}])

(defn draw-color-palatte [index color]
  [:div {:style {:background (str "radial-gradient(circle at 65% 15%, white 1px, " color " 60%)")}
         :class ["color" "clickable" (when (= index (:selected-color @game)) "selected")]
         :key   index}]
  )

(defn draw-empty [index]
  [:div {:style {:background (str "radial-gradient(circle at 60% 20%, white 1px, gray 60%)")}
         :class "color"
         :key   index}
   ])

(defn draw-attempt [attempt]
  [:div {:class "attempt"}
   (if (empty? attempt) (map-indexed draw-empty (:code @game)) (map-indexed draw-color attempt))
   ])

(defn draw-empty-attempt-result [index]
  [:div {:class "result"
         :key   index}
   ]
  )

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
   (draw-attempt (:guess attempt))
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
