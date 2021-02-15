class Api::ItemsController < ApplicationController
  def index
    sleep 2
    @items = Item.where(pokemon_id: params[:id])
    render :index
  end

  def show
    sleep 2
    @item = Item.find(params[:id])
    render :show
  end

  def create_several
    params[:items].each do |item|
      @item = Item.new(name: item.name, price: item.price, happiness: item.happiness, image_url: item.imageUrl, pokemon_id: params[:id])

      if @item.save
        next
      else
        render json: @item.errors.full_messages, status: 422
      end
    end

    @items = Item.where(pokemon_id: params[:id])

    render :index
  end
  
    
  def create
    sleep 1
    @item = Item.new(itemparams)

    if @item.save
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def update
    sleep 1
    @item = Item.find(params[:id])

    if @item.update(item_params)
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :happiness, :image_url, :pokemon_id)
  end
  
end

      # Item.create(pokemon_id: @pokemon.id, name: "default item 1", price: 100, happiness: 100, image_url: "/assets/pokemon_super_potion.svg")
      # Item.create(pokemon_id: @pokemon.id, name: "default item 2", price: 123, happiness: 123, image_url: "/assets/pokemon_egg.svg")