Rails.application.routes.draw do
  get 'users/home'
  get 'goal/form'

  get 'goal/:id' => 'goal#index'
  get "login" => "users#login_form"
  post "login" => "users#login"
  post "logout" => "users#logout"

  post "users/:id/update" => "users#update"
  get "users/:id/edit" => "users#edit"
  post "users/create" => "users#create"
  get "signup" => "users#new"
  get "member" => "users#index"
  resources :posts
  get "posts" => "posts#index"
  get "skill" => "skill#top"
  get "/" => "home#top"
  get "users/:id" => "users#show"
  post "goal/create" => "goal#create"
end
