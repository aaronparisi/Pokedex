class Api::PokemonController < ApplicationController
  def index
    sleep 2
    @pokemon = Pokemon.all 
    render :index 
  end

  def show
    sleep 2
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    sleep 2
    @pokemon = Pokemon.new(poke_params)
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def update
    sleep 2
    @pokemon = Pokemon.find(params[:id])
    if @pokemon.update(poke_params)
      # params[:pokemon][:moves].each do |move|
      #   @move = Move.new(name: move)
      #   if @move.save
      #     PokeMove.create(move_id: @move.id, pokemon_id: @pokemon.id)
      #   else
      #     render json: @move.errors.full_messages, status: 422
      #   end
      # end

      # Item.create(pokemon_id: @pokemon.id, name: "default item 1", price: 100, happiness: 100, image_url: "/assets/pokemon_super_potion.svg")
      # Item.create(pokemon_id: @pokemon.id, name: "default item 2", price: 123, happiness: 123, image_url: "/assets/pokemon_egg.svg")

      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end
  
  private

  def poke_params
    params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense)
  end
  
end
