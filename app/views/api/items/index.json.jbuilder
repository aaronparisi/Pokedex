if @items.length != 0 
  json.items do 
    @items.each do |item| 
      json.set! item.id do 
        json.extract! item, :id, :pokemon_id, :name, :price, :happiness
        json.image_url asset_path(item.image_url) 
        end
    end
  end 
else
  json.items ({})
end