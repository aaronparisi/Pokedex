if @moves.length != 0
  json.moves do 
    @moves.each do |move|
      json.set! move.id do
        json.extract! move, :id, :name, :damage
      end
    end
  end
end