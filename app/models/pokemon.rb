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
class Pokemon < ApplicationRecord
  TYPES = [
    'fire',
    'electric',
    'normal',
    'ghost',
    'psychic',
    'water',
    'bug',
    'dragon',
    'grass',
    'fighting',
    'ice',
    'flying',
    'poison',
    'ground',
    'rock',
    'steel'
  ].sort.freeze

  validates :attack, :defense, :image_url, :name, :poke_type, presence: true
  validates :name, uniqueness: true
  validates :attack, :defense, numericality: true
  validates :poke_type, inclusion: { in: TYPES }

  has_many :items

  has_many :moves, class_name: :Moves, foreign_key: :pokemon_id
  
end
