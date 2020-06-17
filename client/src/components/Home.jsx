import React from 'react'
import Layout from './shared/Layout'
import AllPosts from './AllPosts'

const Home = () => {
 return (
  <Layout>
   <div className="all-posts">
    <AllPosts />
   </div>
  </Layout>
 )
}
export default Home;