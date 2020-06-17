import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostCard extends Component {
  render() {
    return (
      <Link to={'/' + this.props.id}>
        <div>
<<<<<<< HEAD
          <img src={this.props.imgURL} width={"300px"}></img>
          <div>
            <h3>{this.props.title}</h3>
=======
        <h3>{this.props.title}</h3>
         
          <div>
          <img src={this.props.imgURL} width={"300px"}></img>
>>>>>>> 9011ee0e55aef731c903331015f5e88c6ebde2d0
            <div>{this.props.user}</div>
          </div>
        </div>
      </Link>

    )
  }
}
