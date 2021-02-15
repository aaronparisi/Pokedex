Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :pokemon, only: [:index, :show, :create, :update] do
      member do
        resources :moves, only: [:index, :create] do
          collection do
            post '/create_several', to: 'api/moves#createSeveral'
          end
        end
        
        resources :items, only: [:index, :create] do
          collection do
            post '/create_several', to: 'api/items#createSeveral'
          end
        end
      end
    end

    resources :items, only: [:show, :update]
  end
end
