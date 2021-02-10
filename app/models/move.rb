# == Schema Information
#
# Table name: moves
#
#  id         :bigint           not null, primary key
#  damage     :integer
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  pokemon_id :bigint
#
# Indexes
#
#  index_moves_on_pokemon_id  (pokemon_id)
#
# Foreign Keys
#
#  fk_rails_...  (pokemon_id => pokemons.id)
#
class Move < ApplicationRecord
    validates :name, presence: true

    belongs_to :pokemon, class_name: :Pokemon, foreign_key: "pokemon_id"
end
