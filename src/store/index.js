import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    categories: [],
    products: [],//length nya sesuai dengan jumlah categories
    name: '',
    img_url: '',
    price: 0,
    stock: 0,
    category: '',
    product: {}
  },
  mutations: {
    setEmailPassword (state, payload) {
      const {email,password} = payload
      state.email = email
      state.password = password
    },
    setCategories (state, payload) {
      const {categories} = payload
      state.categories = categories
    },
    setProducts (state, payload) {
      const {products} = payload
      state.products = products
    },
    setInputData (state, payload) {
      const {name,img_url,price,stock,category} = payload
      state.name = name
      state.img_url = img_url
      state.price = price
      state.stock = stock
      state.category = category
    },
    setProduct (state, payload) {
      const {product} = payload
      state.product = product
    }
  },
  actions: {
    login (context) {
      let email = context.state.email
      let password = context.state.password
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email,
          password
        }
      }).then(({ data }) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      }).then(_ => {
        context.commit('setEmailPassword', {
          email: '',
          password: ''
        })
      })
    },
    addProduct (context) {
      let name = context.state.name
      let img_url = context.state.img_url
      let price = context.state.price
      let stock = context.state.stock
      let category = context.state.category
      axios({
        method: 'POST',
        url: 'products',
        headers: {
          access_token : localStorage.getItem('access_token')
        },
        data: {
          name,
          img_url,
          price,
          stock,
          category
        }
      }).then(({data}) => {
        console.log(data);
      }).catch(err => {
        console.log(err);
      }).then(_ => {
        context.commit('setInputData', {
          name: '',
          img_url: '',
          price: 0,
          stock: 0,
          category: ''
        })
      })
    },
    fetchAllProduct (context) {
      axios({
        method: 'GET',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({data}) => {
        context.commit('setCategories', {
          categories: []
        })
        context.commit('setProducts', {
          products: []
        })
        let categories = context.state.categories
        let categoriesTemp = []
        let productsTemp = []
        data.forEach(e => {
          for (let i = 0; i < categories.length; i++) {
            if (e.category !== categories[i]) {
              categoriesTemp.push(e.category)
            }
          }
        })
        categories.forEach(e => {
          let temp = []
          for (let i = 0; i < data.length; i++) {
            if (e === data.category) {
              temp.push(data)
            }
          }
          productsTemp.push(temp)
        })
        context.commit('setCategories', {
          categories: categoriesTemp
        })
        context.commit('setProducts', {
          products: productsTemp
        })
      }).catch(err => {
        console.log(err)
      })
    },
    fetchProduct (context, payload) {
      const {id} = payload
      axios({
        method: 'GET',
        url: `products/${id}`,
        headers: {
          access_token = localStorage.getItem('access_token')
        }
      }).then(({data}) => {
        context.commit('setProduct', {
          product = data
        })
      }).catch(err => {
        console.log(err);
      })
    },
    updateProduct (context, payload) {
      let name = context.state.product.name
      let img_url = context.state.product.img_url
      let price = context.state.product.price
      let stock = context.state.product.stock
      let category = context.state.product.category
      const {id} = payload
      axios({
        method: 'PUT',
        url: `products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          img_url,
          price,
          stock,
          category
        }
      }).then(({data}) => {
        console.log(data);
      }).catch(err => {
        console.log(err);
      }).then(_ => {
        context.commit('setInputData', {
          name: '',
          img_url: '',
          price: 0,
          stock: 0,
          category: ''
        })
      })
    },
    destroy(context, payload) {
      const {id} = payload
      axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({data}) => {
        console.log(data);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})
