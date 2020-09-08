Rails.application.routes.draw do
  resources :posts
  get "posts" => "posts#index"

  get "skill" => "skill#top"
  get "/" => "home#top"
end
