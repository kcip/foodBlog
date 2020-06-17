import React, { Component } from 'react'
import Layout from './shared/Layout'
import { getPost, updatePost } from '../services/posts'
import { Redirect } from 'react-router-dom'

class PostEdit extends Component {
 constructor(props) {
  super()
  this.state = {
   post: {
    title: '',
    user: '',
    imgURL: '',
    content: '',
    _id: ''
   },
   updated: false
  }
 }


 async componentDidMount() {
  let { id } = this.props.match.params
  const post = await getPost(id)
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
   return <Redirect to={`/` + post._id} />
  }


  return (
   <Layout>
    <div className="product-edit">
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
    </div>
   </Layout>
  )
 }
}
export default PostEdit;