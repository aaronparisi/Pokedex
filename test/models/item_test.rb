# == Schema Information
#
# Table name: items
#
#  id         :bigint           not null, primary key
#  happiness  :integer          not null
#  image_url  :string           not null
#  name       :string           not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  pokemon_id :integer          not null
#
# Indexes
#
#  index_items_on_pokemon_id  (pokemon_id)
#
require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
