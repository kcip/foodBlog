import React, { Component } from 'react'
import PostCard from './PostCard'
import { getPosts } from '../services/posts.js'

export default class AllPosts extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await getPosts()
    console.log(posts)
    this.setState({ posts })
  }


  render() {

    const posts = this.state.posts.map((post, index) => {
      return <PostCard title={post.title} imgURL={post.imgURL} content={post.content} user={post.user} index={index} />
    })

    console.log(posts)

    return (

      <div className="posts">
        {posts}
      </div>

    )
  }
}
