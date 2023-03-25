import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Context } from '../../context/Context'

class PublicRoute extends Component {
    static contextType = Context
  render() {
    const {user} = this.context
    const loadedComponent = user ? this.props.history.push('/ClassRoomHome') :  this.props.children
    return (
      <div>{loadedComponent}</div>
    )
  }
}
export default withRouter(PublicRoute)
