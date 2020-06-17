import React, { Component } from 'react'
import Layout from './shared/Layout'
import { createPost } from '../services/posts'
import { Redirect } from 'react-router'


class PostCreate extends Component {
 constructor() {
  super()

  this.state = {
   post: {
    title: '',
    content: '',
      imgURL: '',
      user: ''
    }

  }
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
    const created = await createPost(this.state.post)
    this.setState({ created })
  }




  render() {
    const { post, created } = this.state
    
    if (created) {
      return <Redirect to={'/Allposts'} />
    }
  return (
   <Layout>
      <form className="post-create" onSubmit={this.handleSubmit}>
       
       
        <input
          className="input-title"
          placeholder="Name"
          value={this.state.post.title}
          name='title'
          required autoFocus
          onChange={this.handleChange} />
        <input
                        className="input-user"
                        placeholder='user'
                        value={this.state.post.user}
                        name='user'
                        required
                        onChange={this.handleChange}
        />
        
      <textarea
                        className="textarea-description"
                        rows={10}
                        placeholder='Description'
                        value={this.state.post.content}
                        name='content'
                        required
                        onChange={this.handleChange}
        />
          <input
                        className="input-image-link"
                        placeholder='Image Link'
                        value={this.state.post.imgURL}
                        name='imgURL'
                        required
                        onChange={this.handleChange}
        />
           <button type='submit' className="submit-button">Submit</button>
    
    </form>
   </Layout>
  )
 }
}
export default PostCreate