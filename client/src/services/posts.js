import api from './apiConfig'

export const getPosts = async () => {
  try {
    const response = await api.get('/posts')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getPost = async title => {
  try {
    const response = await api.get(`/posts/${title}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createPost = async post => {
  try {
    const response = await api.post('/posts', post)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updatePost = async (title, post) => {
  try {
    const response = await api.put(`/posts/${title}`, post)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deletePost = async title => {
  try {
    const response = await api.delete(`/posts/${title}`)
    return response.data
  } catch (error) {
    throw error
  }
}

