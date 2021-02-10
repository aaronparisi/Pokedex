Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :pokemon, only: [:index, :show, :create, :update] do
      member do
        resources :moves, only: [:index, :create]
        resources :items, only: [:index, :create]
      end
    end

    resources :moves, only: [:show, :update]
    resources :items, only: [:show, :update]
  end
end
