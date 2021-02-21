import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-cms-app-01.herokuapp.com/'
})

export default instance
