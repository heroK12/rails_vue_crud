Rails.application.routes.draw do
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :books ,only: [:index]
  namespace :api do
    resources :books, only: [:index, :show, :create, :update, :destroy]
  end
end
