(ns mastermind.core
    (:require
      [reagent.core :as r]))
(defonce game (r/atom {
                       :code [1 2 3 4 5]
                       :current-turn 0
                       :attempts []
                       :won? false
                       }))

(defn draw-board [attempts]

  )
(defn home-page []
  [:div {:class "container"}
   [:header {:class "header"} "Mastermind"]
   [:div {:class "board"}
    [:div {:class "secret"}
     [:div {:class "code"}]
     [:input {:type "Button" :class "submit-btn" :value "Submit"} ]
     ]
    [:div {:class "guesses"}
     (map-indexed draw-board (:attempts @game))
     ]
    ]
    [:div {:class "colors"}]
   ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
