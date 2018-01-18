Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :planes, only: [:create, :show, :edit, :destroy]

  root :to => 'planes#index'

  namespace :api do
    namespace :v1 do
      resources :planes, only: [:index, :create, :destroy, :update] 
    end
  end
end
