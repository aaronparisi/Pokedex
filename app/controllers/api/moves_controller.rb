class Api::MovesController < ApplicationController
  def create
    sleep 1
    @move = Move.new(move_params)

    if @move.save
      render :show
    else
      render json: @move.errors.full_messages, status: 422
    end
  end

  def update
    @move = Move.find(params[:id])

    if @move.update(move_params)
      # we do not need to change anything about PokeMoves
      render :show
    else
      render json: @move.errors.full_messages, status: 422
    end
  end

  private

  def move_params
    params.require(:move).permit(:name)
  end
  
end
