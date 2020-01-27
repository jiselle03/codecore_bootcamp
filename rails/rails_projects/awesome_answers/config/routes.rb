Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # This defines a 'route' rule that says when we receive a GET request with the URL '/'
  # handle it with the 'WelcomeController' with the 'index' action inside that conroller.
  get('/', { to: 'welcome#index', as: 'root' })

  # # Question Routes
  # get('/questions/new', to: 'questions#new', as: :new_question)
  # #new_question_path or #new_question_url
  # post('/questions', to: 'questions#create', as: :questions)

  # get('/questions/:id', to: 'questions#show', as: :question)
  # # question_path(id) or question_url(id)
  
  # delete('/questions/:id', to: 'questions#destroy')

  # get('/questions/:id/edit', to: 'questions#edit', as: :edit_question)
  # patch('/questions/:id', to: 'questions#update')

  # get('/contacts/new', to: 'contacts#new', as: 'contacts_new')
  # post('/contacts', to: 'contacts#create')

  # get('/questions', to: 'questions#index')

  # 'resources' method will generate all CRUD routes following RESTful
  # conventions for a resource. It will assume there is a controller
  # named after the first argument pluralized and PascalCased (i.e. QuestionsController)
  resources :questions do
    # Routes written inside of a block passed to 'resources' method will be
    # prefixed by a path corresponding to the passed in symbol (:question)
    # In this case, all nested routes will be prefixed with '/questions/:question_id'

    resources :answers, only: [:create, :destroy]
    # resources :answers, except [:new, :edit, :update, :index]

    # The 'shallow: true' named argument will separate routes that require the parent from
    # those that don't. Routes that require the parent (e.g. index, new, create) won't change 
    # and will still be prefixed with /questions/:question_id.
    # Routes that don't require the parent (e.g. show, edit, update, destroy) will have the parent prefix 
    # removed. For example: /questions/10/likes/9/edit becomes /likes/9/edit
    resources :likes, shallow: true, only: [:create, :destroy]

    # Use the 'on:' named argument to specify how a nested route will behave relative to its
    # parent.
    # 'on: :collection' means that it acts on a single resource. All questions in this case.
    # (e.g. questions/liked)
    # 'on: :member' means that it acts on a single resource. A single question in this case.
    # Edit, update, destroy, show are member routes (e.g. /question/:id/liked)
    get :liked, on: :collection
  end

  get '/contacts/new', to: 'contacts#new'
  post '/contacts', to: 'contacts#create'

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]
  # CRUD on only one thing if singular resource (no id as part of URL)

  resources :job_posts

  # The namespace method in Rails routes makes it so it will automatically
  # look in a directory API, then in a directory v1 for QuestionsController.

  # The option 'defaults: { format: :json }' will set 'json' as the default
  # response for all routes.
  namespace :api, defaults: { format: :json } do
    # /api...
    namespace :v1 do 
      # /api/v1...
      resources :questions
      # /api/v1/questions
    end
  end

  match(
    "/delayed_job",
    to: DelayedJobWeb,
    anchor: false,
    via: [:get, :post]
  )
  
end