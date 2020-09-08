Rails.application.routes.draw do
  get "posts/index" => "posts#index"
  get "skill" => "skill#top"
  get "/" => "home#top"

end
