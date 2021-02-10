class DropPokeMovesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :poke_moves
  end
end
