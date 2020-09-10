Rails.application.routes.draw do
  get "login" => "users#login_form"
  post "login" => "users#login"
  post "logout" => "users#logout"

  post "users/:id/update" => "users#update"
  get "users/:id/edit" => "users#edit"
  post "users/create" => "users#create"
  get "signup" => "users#new"
  get "users/:id" => "users#show"
  get "member" => "users#index"
  resources :posts
  get "posts" => "posts#index"
  get "skill" => "skill#top"
  get "/" => "home#top"
end
