Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  get 'about', to: 'welcome#about'
  get 'contact', to: 'welcome#contact'
  patch '/reviews/:id/toggle', to: 'reviews#toggle_hidden', as: "toggle_hidden"

  resources :products do
    resources :reviews, only: [:create, :destroy, :edit, :update]
  end

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

end
