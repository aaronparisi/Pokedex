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
class Item < ApplicationRecord
  validates :happiness, :image_url, :name, :price, presence: true
  validates :happiness, :price, numericality: true

  belongs_to :pokemon
end
