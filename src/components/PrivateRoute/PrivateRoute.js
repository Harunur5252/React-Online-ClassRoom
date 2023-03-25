import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Context } from '../../context/Context'

class PrivateRoute extends Component {
    static contextType = Context
  render() {
    const {user} = this.context
    const loadedComponent = user ? this.props.children : this.props.history.push('/userLogin')
    return (
      <div>{loadedComponent}</div>
    )
  }
}
export default withRouter(PrivateRoute)

