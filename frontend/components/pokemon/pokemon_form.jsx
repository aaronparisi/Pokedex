import React from 'react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)

    if (props.pokemon) {
      this.curName = props.pokemon.name
      this.curImageUrl = props.pokemon.imageUrl
      this.curPokeType = props.pokemon.pokeType
      this.curAttack = props.pokemon.attack
      this.curDefense = props.pokemon.defense
      this.moves = this.arrToObj(props.moves)
      this.editing = true
    } else {
      this.curName = ''
      this.curImageUrl = ''
      this.curPokeType = ''
      this.curAttack = ''
      this.curDefense = ''
      this.moves = { 1: '', 2: '' }
      this.editing = false
    }

    this.errorsDisplay = this.errorsDisplay.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.arrToObj = this.arrToObj.bind(this)
    this.handleMovesUpdate = this.handleMovesUpdate.bind(this)
  }

  handleMovesUpdate(e, idx) {
    let moves = {...this.state.moves}
    moves[idx] = e.currentTarget.value
    this.setState({moves})
  }

  arrToObj(arr) {
    let ret = {}

    arr.forEach((obj, idx) => {
      ret[idx] = obj
    })

    return ret
  }

  componentDidMount() {
    let id = this.props.match.params.pokemonId
    if (id) {
      this.props.requestSinglePokemon(id)
    }
  }

  errorsDisplay() {
    if (this.props.errors) {
      return (
        <ul>
          {Object.values(this.props.errors).map((err, idx) => {
            return <li key={idx}>{err}</li>
          })}
        </ul>
      )
    } else {
      return
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    const pokeToAdd = {
      name: this.curName,
      image_url: this.curImageUrl,
      poke_type: this.curPokeType,
      attack: this.curAttack,
      defense: this.curDefense,
      moves: Object.values(this.moves)
    }

    if (this.editing) {
      this.props.putPokemon(pokeToAdd)
      .then(
        addedPoke => {
          this.props.history.push(`pokemon/${addedPoke.pokemon.id}`)
        },
        err => {
          this.props.receivePokemonErrors(err)
        }
      )
    } else {
      this.props.postPokemon(pokeToAdd)
      .then(
        addedPoke => {
          this.props.history.push(`pokemon/${addedPoke.pokemon.id}`)
        },
        err => {
          this.props.receivePokemonErrors(err)
        }
      )
    }
  }

  render() {
    return (
      <div className="pokemon-detail">
        <img src="/assets/pokemon-logo.svg" alt="Copyright of Nintendo Pokemon"/>

        {this.errorsDisplay()}

        <form
          className="pokemon-form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text" 
            name="name" 
            id="name"
            placeholder="Name"
            value={this.curName}
            onChange={e => this.setState({curName: e.currentTarget.value})}
          />

          <input
            type="text" 
            name="image_url" 
            id="image_url"
            placeholder="Image Url"
            value={this.curImageUrl}
            onChange={e => this.setState({curImageUrl: e.currentTarget.value})}
          />

          <select
            name="poke_type"
            id="poke_type"
            onChange={e => this.setState({curPokeType: e.currentTarget.value})}
          >
            <option value="">Select PokeType</option>
            {
              window.POKEMON_TYPES.map(type => {
                return (
                  <option key={type} value={type}>{type}</option>
                )
              })
            }
          </select>

          <input 
            type="number" 
            name="attack" 
            id="attack"
            value={this.curAttack}
            placeholder="Attack"
            onChange={e => this.setState({curAttack: e.currentTarget.value})}
          />

          <input 
            type="number" 
            name="defense" 
            id="defense"
            value={this.curDefense}
            placeholder="Defense"
            onChange={e => this.setState({curDefense: e.currentTarget.value})}
          />

          {
            Object.values(this.moves).map((move, idx) => {
              return (
                <input
                  type="text"
                  name={`move_${idx}`}
                  id={`move_${idx}`}
                  key={`move_${idx}`}
                  placeholder={`Move ${idx}`}
                  value={this.moves[idx]}
                  onChange={e => this.handleMovesUpdate(e, idx)}
                />
              )
            })
          }

          <input type="submit" value="Create Pokemon!"/>
        </form>
      </div>
    )
  }
}

export default PokemonForm