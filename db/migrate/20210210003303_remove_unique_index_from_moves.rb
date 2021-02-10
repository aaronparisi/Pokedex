class RemoveUniqueIndexFromMoves < ActiveRecord::Migration[5.2]
  def change
    remove_index :moves, name: :index_moves_on_name
  end
end
