class Api::PokemonController < ApplicationController
  def index
    sleep 0.5
    @pokemon = Pokemon.all 
    render :index 
  end

  def show
    sleep 0.5
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    sleep 0.5
    @pokemon = Pokemon.new(poke_params)
    if @pokemon.save
      PokeMove.create(move_id: 1, pokemon_id: @pokemon.id)
      PokeMove.create(move_id: 2, pokemon_id: @pokemon.id)

      Item.create(pokemon_id: @pokemon.id, name: "default item 1", price: 100, happiness: 100, image_url: "/assets/pokemon_super_potion.svg")
      Item.create(pokemon_id: @pokemon.id, name: "default item 2", price: 123, happiness: 123, image_url: "/assets/pokemon_egg.svg")
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end
  
  private

  def poke_params
    params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, :move_1, :move_2)
  end
  
end
