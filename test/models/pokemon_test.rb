# == Schema Information
#
# Table name: pokemons
#
#  id         :bigint           not null, primary key
#  attack     :integer          not null
#  defense    :integer          not null
#  image_url  :string           not null
#  name       :string           not null
#  poke_type  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class PokemonTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
