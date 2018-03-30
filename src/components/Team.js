import { Component } from 'react'
import { getTeam } from '../api'

export default class Team extends Component {

  state = {
    team: null,
  }
  componentDidMount () {
    this.fetchTeam(this.props.id)
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.id !== nextProps.id) {
      this.fetchTeam(nextProps.id)
    }
  }
  fetchTeam = (id) => {
    this.setState(() => ({ team: null }))
    getTeam(id)
      .then((team) => this.setState(() => ({ team })))
  }
  render () {
    return this.props.children(this.state.team)
  }
}
