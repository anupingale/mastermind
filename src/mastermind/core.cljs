(ns mastermind.core
  (:require
    [reagent.core :as r]))
(def colors ["red" "green" "purple" "maroon" "blue" "darkorange" "darkgoldenrod" "black"])
(defonce game (r/atom {
                       :code         [1 2 3 4 5]
                       :current-turn 0
                       :attempts     (into [] (repeat 12 {:guess [0 1 2 3 4 5 6 7 ] :result []}))
                       :won?         false
                       }))

(defn draw-user-attempt [index attempt]

  [:div {:style {:background (str "radial-gradient(circle at 65% 15%, white 1px, " (colors index) " 60%)")}
         :class "color"
         :key   index}])

(defn draw-empty [index]
  [:div {:style {:background (str "radial-gradient(circle at 60% 20%, white 1px, gray 60%)")}
         :class ["color" "empty-color"]
         :key   index}
   ])

(defn draw-attempt [attempt]
  [:div {:class "attempt"}
   (if (empty? attempt) (map-indexed draw-empty (:code @game)) (map-indexed draw-user-attempt attempt))
   ])

(defn draw-attempt-result [result]
  [:div {:class "attempt-result"}
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
   [:div {:class "colors"}]
   ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
