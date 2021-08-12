Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :users, only: [:show, :create] do
    resources :boards do
      resources :posts
    end
  end

  post '/users/login', to: 'users#login'
  get '/users/verify', to: 'users#verify'
  get '/posts', to: 'posts#public_index'
end
