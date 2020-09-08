Rails.application.routes.draw do
  get "posts/index" => "posts#index"
  get "posts/:id" => "posts#show"
  get "new" => "posts#new"

  get "skill" => "skill#top"
  get "/" => "home#top"

end
