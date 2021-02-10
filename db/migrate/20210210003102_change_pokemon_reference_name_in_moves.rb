class ChangePokemonReferenceNameInMoves < ActiveRecord::Migration[5.2]
  def change
    rename_column :moves, :pokemons_id, :pokemon_id
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
