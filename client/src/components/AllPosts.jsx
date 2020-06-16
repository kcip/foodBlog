import React, { Component } from 'react'
import PostCard from './PostCard'
//import Layout from './shared/Layout'
import { getPosts } from '../services/posts'

export default class AllPosts extends Component {
 constructor() {
  super()

  this.state = {
   posts: []
  }
 }

 async componentDidMount() {
  const posts = await getPosts()
  this.setState({ posts })
 }


 render() {
  const posts = this.state.posts.map((post, index) => {
   return <PostCard title={post.title} imgURL={post.imgURL} content={post.content} user={post.user} index={index} />
  })

  return (

   <div className="posts">
    {posts}
   </div>

  )
 }
}
