Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/users/login', to: 'users#login'
  get '/users/verify', to: 'users#verify'
  get '/posts', to: 'posts#public_index'
  get '/posts/:id', to: 'posts#post_show'
  # get 'user/:user_id/posts', to: 'posts#get_user_posts'
  

  resources :users, only: [:create] do
    resources :boards do
      resources :posts
    end
  end

  
end
