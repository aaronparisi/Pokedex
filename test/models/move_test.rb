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
require 'test_helper'

class MoveTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
