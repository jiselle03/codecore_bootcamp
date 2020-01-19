Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'welcome#index'
  get 'about', to: 'welcome#about'

  resources :projects do
    resources :tasks, shallow: true, only: [:create, :destroy, :update]
    resources :favorites, shallow: true, only: [:create, :destroy]
    get :favorited, on: :collection
  end

  get('/users/:id/password/edit', { to: 'users#edit_password', as: 'edit_password' })
  patch('/users/:id/password/edit', { to: 'users#update_password', as: 'update_password'})
  
  get("/projects/:id/destroy", { to: "projects#destroy", as: :project_destroy })
  get("/projects/:project_id/tasks", { to: "tasks#create", as: :tasks_create })
  get("/tasks/:id", { to: "tasks#destroy", as: :task_destroy })
  get("/tasks/:id/edit", { to: "tasks#update", as: :task_update })
  
  get("/projects/:project_id/favorites", { to: "favorites#create", as: :favorites_create })
  get("/favorites/:id", { to: "favorites#destroy", as: :favorites_destroy })
  
  resources :users, only: [:new, :create, :edit, :update]
  resource :session, only: [:new, :create, :destroy]
  
  get("/session/destroy", { to: "sessions#destroy", as: :session_destroy })
  
end
