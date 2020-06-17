import React, { Component } from 'react'
import Layout from './shared/Layout'
import { getPost, deletePost } from '../services/posts';
import { Link } from 'react-router-dom'

class PostDetail extends Component {
  constructor(props) {
    super()
    this.state = {
      post: {
        title: '',
        user: '',
        imgURL: '',
        content: '',
        id: ''
      }
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const post = await getPost(id)
    this.setState({ post })
  }

  render() {
    const { post } = this.state
    return (
      <Layout>
        <div>
          <div className="post-detail">
            <div>
              <img src={this.state.post.imgURL} width={"600px"}></img>
            </div>
            <div className="title">
              <h2>
                {this.state.post.title}
              </h2>
            </div>

            <div className="author">
              {this.state.post.user}
            </div>
            <div className="content">
              {this.state.post.content}
            </div>
            <br />

            <div className="button-container">
              <button className="edit-button">
                <Link className="edit-link" to={`${this.state.post.id}/edit`}>Edit</Link>
              </button>
              <button className="delete-button" onClick={() => deletePost(this.state.post.id)}>Delete</button>
            </div>

            <br />

            <Link exact to='/'>
              Back
            </Link>

          </div>
        </div>
      </Layout>
    )
  }
}
export default PostDetail