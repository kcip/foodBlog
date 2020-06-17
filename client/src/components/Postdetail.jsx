import React, { Component } from 'react'
import Layout from './shared/Layout'
import { getPost, deletePost } from '../services/posts';
import { Link, Redirect } from 'react-router-dom'

class Postdetail extends Component {
  constructor(props) {
    super()
    this.state = {
      post: {
        title: '',
        user: '',
        imgURL: '',
        content: '',
        _id: ''
      }
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const post = await getPost(id)
    console.log(post)
    this.setState({ post })
  }

  deleteAndRedirect(id) {
    deletePost(this.state.post._id)

    alert("This post is deleted")

    return < Redirect exact to="/" />
  }

  render() {
    const { post } = this.state
    return (
      <Layout>
        <div>
          <div className="post-detail">
            <div>
              <img src={post.imgURL} width={"600px"}></img>
            </div>
            <div className="title">
              <h2>
                {post.title}
              </h2>
            </div>

            <div className="author">
              {post.user}
            </div>
            <div className="content">
              {post.content}
            </div>

            <br />

            <div className="button-container">
              <button className="edit-button">
                <Link className="edit-link" exact='true' to={`${post._id}/edit`}>Edit</Link>
              </button>
              <button className="delete-button" onClick={() => {
                this.deleteAndRedirect(this.state.post._id)

              }}>Delete</button>
            </div>

            <br />

            <Link exact='true' to='/'>
              Back
            </Link>

          </div>
        </div>
      </Layout>
    )
  }
}
export default Postdetail