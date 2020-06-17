import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostCard extends Component {
  render() {
    return (
      <Link to={'/' + this.props.id}>
        <div>
        <h3>{this.props.title}</h3>
         
          <div>
          <img src={this.props.imgURL} width={"300px"}></img>
            <div>{this.props.user}</div>
          </div>
        </div>
      </Link>

    )
  }
}
