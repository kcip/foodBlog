import axios from 'axios'

let apiUrl

const apiUrls = {
  production: 'https://food-blog-001.herokuapp.com/api/',
  development: 'http://localhost:4000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development

} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl
})

export default api

