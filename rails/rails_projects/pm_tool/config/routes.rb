Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'welcome#index'
  get 'about', to: 'welcome#about'

  resources :projects do
    resources :tasks, shallow: true, only: [:create, :destroy, :update]
    resources :favorites, shallow: true, only: [:create, :destroy]
    get :favorited, on: :collection
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  
end
