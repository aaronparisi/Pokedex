class AddPointsToMoves < ActiveRecord::Migration[5.2]
  def change
    add_column :moves, :damage, :integer
  end
end
