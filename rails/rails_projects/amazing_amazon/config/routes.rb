Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  get 'about', to: 'welcome#about'
  get 'contact', to: 'welcome#contact'
  patch '/reviews/:id/toggle', to: 'reviews#toggle_hidden', as: "toggle_hidden"

  resources :products do
    resources :favorites, shallow: true, only: [:create, :destroy]
    get :favorited, on: :collection
    resources :reviews, shallow: true, only: [:create, :destroy, :edit, :update] do
      resources :likes, only: [:create, :destroy]
      resources :votes
    end
  end

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  resources :news_articles

  namespace :api, defaults: { format: :json } do
    namespace :v1 do 
      resources :products
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create] do
        get :current, on: :collection
      end
    end
  end

  match(
    "/delayed_job",
    to: DelayedJobWeb,
    anchor: false,
    via: [:get, :post]
  )

end
