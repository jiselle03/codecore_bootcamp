Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'welcome#index'
  get 'about', to: 'welcome#about'

  resources :projects do
    resources :tasks, shallow: true, only: [:create, :destroy, :update]
  end
  
end
