import React from 'react'

class PokemonMovesForm extends React.Component {
  constructor(props) {
    super(props)

    if (props.pokemon) {
      this.state = {
        moves: props.moves
      }
    } else {
      this.state = {
        moves: [
          {
            name: 'Smash', damage: 0
          },
          {
            name: 'Dash', damage: 0
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

    if (this.props.editing) {

    } else {
      
    }
  }

  render() {
    if (this.props.currentStep !== 'moves') {
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

          <input type="submit" value="Add moves!"/>
        </form>
      </div>
    )
  }
}

export default PokemonMovesForm