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
    @pokemon = Pokemon.new(poke_params.except(:move_1, :move_2))
    if @pokemon.save
      # because the postPokemon action creator calls receive single pokemon,
      # i have to make all the moves and items before returning from the initial
      # ajax request;
      # i could redirect to other controllers from here, but idk if that's necessary
      @move_1 = Move.new(name: params[:pokemon][:move_1])
      @move_2 = Move.new(name: params[:pokemon][:move_2])

      if @move_1.save && @move_2.save
        PokeMove.create(move_id: @move_1.id, pokemon_id: @pokemon.id)
        PokeMove.create(move_id: @move_2.id, pokemon_id: @pokemon.id)
      else
        render json: @move_1.errors.full_messages, status: 422
      end

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
