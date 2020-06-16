import React, { Component } from 'react'

class PostEdit extends Component {
 render() {
  return (
   <Layout>
    <div className="postEdit">
     <form>
      <input className="postEdit--input" placeholder="post title" />
      <input className="postEdit--input" placeholder="post img" />
      <textarea />
      <button type="submit" className="postEdit--saveButton">save</button>
     </form>
    </div>
   </Layout>
  )
 }
}
export default PostEdit;