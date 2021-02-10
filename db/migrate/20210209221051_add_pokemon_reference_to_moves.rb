class AddPokemonReferenceToMoves < ActiveRecord::Migration[5.2]
  def change
    add_reference :moves, :pokemons, foreign_key: true
  end
end
