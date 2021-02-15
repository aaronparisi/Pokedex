import React from 'react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)

    if (props.pokemon) {
      this.state = {
        curName: props.pokemon.name,
        curImageUrl: props.pokemon.imageUrl,
        curPokeType: props.pokemon.pokeType,
        curAttack: props.pokemon.attack,
        curDefense: props.pokemon.defense,
        moves: props.moves,
        items: props.items
      }
    } else {
      this.state = {
        curName: 'aaron',
        curImageUrl: 'poop.png',
        curPokeType: 'bug',
        curAttack: 5,
        curDefense: 5,
        moves: [
          {
            name: 'Smash', damage: 0
          },
          {
            name: 'Dash', damage: 0
          }
        ],
        items: [
          {
            name: 'default item 1',
            price: 100,
            happiness: 100,
            image_url: "/assets/pokemon_egg.svg"
          },
          {
            name: 'default item 2',
            price: 100,
            happiness: 100,
            image_url: "/assets/pokemon_super_potion.svg"
          },
          {
            name: 'default item 3',
            price: 100,
            happiness: 100,
            image_url: "/assets/pokemon_berry.svg"
          }
        ]
      }
    }

    this.errorsDisplay = this.errorsDisplay.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.arrToObj = this.arrToObj.bind(this)
    this.handleMovesNameUpdate = this.handleMovesNameUpdate.bind(this)
    this.handleMovesDamageUpdate = this.handleMovesDamageUpdate.bind(this)
  }

  handleMovesNameUpdate(e, idx) {
    let moves = this.arrToObj(this.moves)
    moves[idx].name = e.currentTarget.value
    this.setState({ moves: Object.values(moves) })
  }

  handleMovesDamageUpdate(e, idx) {
    let moves = this.arrToObj(this.moves)
    moves[idx].damage = e.currentTarget.value
    this.setState({ moves: Object.values(moves) })
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
      name: this.state.curName,
      image_url: this.state.curImageUrl,
      poke_type: this.state.curPokeType,
      attack: this.state.curAttack,
      defense: this.state.curDefense,
      moves: this.state.moves,
      items: this.state.items
    }

    if (this.props.editing) {
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
        // * create the moves
        addedPoke => {
          this.props.postPokemonMoves(pokeToAdd.moves, addedPoke.pokemon.id)
        },
        err => {
          this.props.receivePokemonErrors(err)
        }
      )
      .then(
        // * create the items
        addedPoke => {
          this.props.postPokemonItems(pokeToAdd.items, addedPoke.pokemon.id)
        },
        err => {
          this.props.receivePokemonErrors(err)
        }
      )
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
    if (this.props.currentStep !== 'pokemon') {
      return null
    }

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
            value={this.state.curName}
            onChange={e => this.setState({curName: e.currentTarget.value})}
          />

          <input
            type="text" 
            name="image_url" 
            id="image_url"
            placeholder="Image Url"
            value={this.state.curImageUrl}
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
            value={this.state.curAttack}
            placeholder="Attack"
            onChange={e => this.setState({curAttack: e.currentTarget.value})}
          />

          <input 
            type="number" 
            name="defense" 
            id="defense"
            value={this.state.curDefense}
            placeholder="Defense"
            onChange={e => this.setState({curDefense: e.currentTarget.value})}
          />

          {
            this.state.moves.map((move, idx) => {
              return (
                <div>
                  <input
                    type="text"
                    name={`move_${idx}_name`}
                    id={`move_${idx}_name`}
                    key={`move_${idx}_name`}
                    placeholder={`Move ${idx} Name`}
                    value={this.state.moves[idx].name}
                    onChange={e => this.handleMovesNameUpdate(e, idx)}
                  />
                  <input
                    type="number"
                    name={`move_${idx}_damage`}
                    id={`move_${idx}_damage`}
                    key={`move_${idx}_damage`}
                    placeholder={`Move ${idx} Damage`}
                    value={this.state.moves[idx].damage}
                    onChange={e => this.handleMovesDamageUpdate(e, idx)}
                  />
                </div>
              )
            })
          }

          {/* {
            Object.values(this.items).map((item, idx) => {
              return (
                <input
                  type="text"
                  name={`item${idx}`}
                  id={`item${idx}`}
                  key={`item${idx}`}
                  placeholder={`Item ${idx}`}
                  value={this.items[idx]}
                  onChange={e => this.handleItemsUpdate(e, idx)}
                />
              )
            })
          } */}

          <input type="submit" value="Create Pokemon!"/>
        </form>
      </div>
    )
  }
}

export default PokemonForm