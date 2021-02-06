import React, { useState } from 'react'

const PokemonForm = props => {
  const [curName, setCurName] = useState('')
  const [curImageUrl, setCurImageUrl] = useState('')
  const [curPokeType, setCurPokeType] = useState('')
  const [curAttack, setCurAttack] = useState('')
  const [curDefense, setCurDefense] = useState('')
  const [curMove1, setCurMove1] = useState('')
  const [curMove2, setCurMove2] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const pokeToAdd = {
      name: curName,
      image_url: curImageUrl,
      poke_type: curPokeType,
      attack: curAttack,
      defense: curDefense,
      // move_1: curMove1,
      // move_2: curMove2
    }
    
    props.postPokemon(pokeToAdd)
  }

  return (
    <div className="pokemon-detail">
      <img src="/assets/pokemon-logo.svg" alt="Copyright of Nintendo Pokemon"/>
      <form
        className="pokemon-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text" 
          name="name" 
          id="name"
          placeholder="Name"
          value={curName}
          onChange={e => setCurName(e.currentTarget.value)}
        />

        <input
          type="text" 
          name="image_url" 
          id="image_url"
          placeholder="Image Url"
          value={curImageUrl}
          onChange={e => setCurImageUrl(e.currentTarget.value)}
        />

        <select
          name="poke_type"
          id="poke_type"
          onChange={e => setCurPokeType(e.currentTarget.value)}
        >
          <option value="">Select PokeType</option>
          <option value="bug">bug</option>
          <option value="dragon">dragon</option>
          <option value="electric">electric</option>
          <option value="fighting">fighting</option>
          <option value="fire">fire</option>
          <option value="flying">flying</option>
          <option value="ghost">ghost</option>
          <option value="grass">grass</option>
          <option value="ground">ground</option>
          <option value="ice">ice</option>
          <option value="normal">normal</option>
          <option value="poison">poison</option>
          <option value="psychic">psychic</option>
          <option value="rock">rock</option>
          <option value="steel">steel</option>
          <option value="water">water</option>
        </select>

        <input 
          type="number" 
          name="attack" 
          id="attack"
          value={curAttack}
          placeholder="Attack"
          onChange={e => {setCurAttack(e.currentTarget.value)}}
        />

        <input 
          type="number" 
          name="defense" 
          id="defense"
          value={curDefense}
          placeholder="Defense"
          onChange={e => {setCurDefense(e.currentTarget.value)}}
        />

        <input
          type="text" 
          name="move_1" 
          id="move_1"
          placeholder="Move 1"
          value={curMove1}
          onChange={e => setCurMove1(e.currentTarget.value)}
        />

        <input
          type="text" 
          name="move_2" 
          id="move_2"
          placeholder="Move 2"
          value={curMove2}
          onChange={e => setCurMove2(e.currentTarget.value)}
        />

        <input type="submit" value="Create Pokemon!"/>
      </form>
    </div>
  )
}

export default PokemonForm