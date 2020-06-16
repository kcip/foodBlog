import React, { Component } from 'react'
import Layout from './shared/Layout'
class PostCreate extends Component {
 constructor() {
  super()

  this.state = {
   post: {
    postTitle: '',
    postContent: '',
    postImgURL: ''
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




 render() {
  return (
   <Layout>
    <form className="postCreate">
     <input type="text" className="postCreate--input" placeholder="post title" />
     <input type="text" className="postCreate--input" placeholder="image link" />
     <textarea type="text" className="postCreate--input" placeholder="description" />
    </form>
   </Layout>
  )
 }
}
export default PostCreate