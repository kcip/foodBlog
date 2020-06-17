import React, { Component } from 'react'
import Layout from './shared/Layout'
import { createPost } from '../services/posts'
import { Redirect } from 'react-router-dom'

class PostCreate extends Component {
  constructor() {
    super()

    this.state = {
      post: {
        title: '',
        imgURL: '',
        content: '',
        user: ''
      },
      created: false
    }
  }

  componentDidMount() {
    this.setState({
      post: {
        title: '.',
        imgURL: '.',
        content: '.',
        user: '.'
      }
    })
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
    console.log(this.state.post)
    const created = await createPost(this.state.post)
    this.setState({ created })
  }


  render() {

    const { post, created } = this.state

    if (created) {
      return <Redirect exact='true' to={`/`} />
    }

    return (
      <Layout>
        <form className="postCreate" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input-name"
            placeholder='Title'
            value={post.title}
            name='title'
            required
            autoFocus
            onChange={this.handleChange} />
          <input
            type="text"
            className="input-imgURL"
            placeholder='Image URL'
            value={post.imgURL}
            name='imgURL'
            required
            onChange={this.handleChange} />
          <textarea
            type="text"
            className="textarea-content"
            rows={20}
            placeholder='Content'
            value={post.content}
            name='content'
            required
            onChange={this.handleChange} />
          <input
            type="text"
            className="input-user"
            placeholder='Author Name'
            value={post.user}
            name='user'
            required
            onChange={this.handleChange} />
          <button type='submit' className="submit-button">Submit</button>
        </form>
      </Layout>
    )
  }
}
export default PostCreate