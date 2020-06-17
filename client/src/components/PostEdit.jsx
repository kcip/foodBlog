import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from './shared/Layout'
import { getPost, updatePost } from '../services/posts'

class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        title: '',
        imgURL: '',
        content: '',
        user: '',
        _id: ''
      },
      updated: false
    }

  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const post = await getPost(id)
    console.log(post);
    
    this.setState({ post })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = this.props.match.params
    const updated = await updatePost(id, this.state.post)
    this.setState({ updated })
  }


  render() {

    const { post, updated } = this.state

    if (updated) {
      return <Redirect to={`/${this.props.match.params.id}`} />
    }

    return (
      <Layout>
        {/* {this.state.post.title} */}
        <div className="postEdit">
          <div className="image-container">
            <img className="edit-product-image" src={post.imgURL} alt={post.name} />
            <form onSubmit={this.handleSubmit}>
              <input
                className="postEdit-input"
                placeholder="post title"
                value={post.imgURL}
                name='imgURL'
                required
                onChange={this.handleChange}
              />
            </form>
          </div>
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <input
              className="input-name"
              placeholder="post img"
              value={post.title}
              name='title'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <input 
              className="input-user"
              placeholder='User'
              value={post.user}
              name='user'
              required
              onChange={this.handleChange}
            />
            <textarea
              className="textera-content"
              rows={10}
              cols={78}
              placeholder='Content'
              value={post.content}
              name='content'
              required
              onChange={this.handleChange}
            />
            <button type="submit" className="postEdit--saveButton">save</button>
          </form>
        </div>
      </Layout>
    )
  }
}
export default PostEdit;