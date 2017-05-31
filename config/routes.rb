Rails.application.routes.draw do
  root to: 'home#show'

  resource :home, only: :show
end
