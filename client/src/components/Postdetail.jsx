import React, { Component } from 'react'
import Layout from './shared/Layout'
import { getPost } from '../services/posts';

class PostDetail extends Component {
  constructor(props) {
    super()
    this.state = {
      title: {
        user: '',
        imgURL: '',
        content: ''
      }
    }
  }

  async componentDidMount() {
    let { title } = this.props.match.params
    const post = await getPost(title)
    this.setState({ post })
  }

  render() {
    const { post } = this.state
    return (
      <Layout>
        <div>
          <div className="post-detail">
            <div className="user"></div>


          </div>
        </div>
      </Layout>
    )
  }
}
export default PostDetail