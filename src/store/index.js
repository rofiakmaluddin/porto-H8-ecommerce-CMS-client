import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: [],
    categories: [],
    products: [], // length nya sesuai dengan jumlah categories
    product: {},
    chosenCategory: 'All Categories'
  },
  mutations: {
    setErrors (state, payload) {
      const { errors } = payload
      state.errors = errors
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setProduct (state, payload) {
      state.product = payload
    },
    setChosenCategory (state, payload) {
      state.chosenCategory = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email,
          password
        }
      }).then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        router.push('/')
      }).catch(err => {
        console.log(err)
        context.commit('setErrors', {
          errors: err
        })
      })
    },
    addProduct (context, payload) {
      console.log(payload)
      const { name, imgUrl, price, stock, category } = payload
      axios({
        method: 'POST',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          img_url: imgUrl,
          price,
          stock,
          category
        }
      }).then(({ data }) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
        context.commit('setErrors', {
          errors: err
        })
      })
    },
    fetchAllProduct (context, chosenCategory) {
      axios({
        method: 'GET',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('setCategories', [])
        const categoriesTemp = []
        data.forEach(e => {
          if (categoriesTemp.length === 0) {
            categoriesTemp.push(e.category)
          } else {
            let flag = false
            for (let i = 0; i < categoriesTemp.length; i++) {
              if (categoriesTemp[i].toLowerCase() === e.category.toLowerCase()) {
                flag = true
              }
            }
            if (!flag) {
              categoriesTemp.push(e.category)
            }
          }
        })
        context.commit('setCategories', categoriesTemp)
        console.log(context.state.categories, '>>> category yg ada')
        context.commit('setProducts', [])
        let productsTemp
        console.log(chosenCategory, '>>> chosenCategory')
        if (!chosenCategory) {
          console.log('masuk !false')
          productsTemp = data
          context.commit('setChosenCategory', 'All Category')
        } else {
          productsTemp = data.filter(e => e.category.toLowerCase() === chosenCategory.toLowerCase())
          context.commit('setChosenCategory', chosenCategory)
        }
        productsTemp.forEach(e => {
          e.price = e.price.toString().split('').reverse()
          const arrResult = []
          let arrTemp = []
          for (let i = 0; i < e.price.length; i++) {
            if (i % 3 !== 0) {
              arrTemp.push(e.price[i])
            } else {
              // arrTemp.reverse()
              if (arrTemp.length !== 0) {
                arrResult.push(arrTemp)
              }
              arrTemp = []
              arrTemp.push(e.price[i])
            }
          }
          if (arrTemp.length !== 0) {
            arrResult.push(arrTemp)
          }
          for (let j = 0; j < arrResult.length; j++) {
            arrResult[j].reverse()
          }
          arrResult.reverse()
          for (let k = 0; k < arrResult.length; k++) {
            arrResult[k] = arrResult[k].join('')
          }
          e.price = 'Rp. ' + arrResult.join('.') + ',00'
        })
        context.commit('setProducts', productsTemp)
        console.log(context.state.products, '>>> products by category')
      }).catch(err => {
        console.log(err)
        context.commit('setErrors', {
          errors: err
        })
      })
    },
    fetchProduct (context, payload) {
      axios({
        method: 'GET',
        url: `products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('setProduct', data)
        router.push('/editPage')
      }).catch(err => {
        console.log(err)
        context.commit('setErrors', {
          errors: err
        })
      })
    },
    updateProduct (context, payload) {
      const { name, imgUrl, price, stock, category, id } = payload
      axios({
        method: 'PUT',
        url: `products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          img_url: imgUrl,
          price,
          stock,
          category
        }
      }).then(({ data }) => {
        console.log(data)
        router.push('/')
      }).catch(err => {
        console.log(err)
        context.commit('setErrors', {
          errors: err
        })
      })
    },
    destroy (context, payload) {
      axios({
        method: 'DELETE',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        console.log(data)
        context.dispatch('fetchAllProduct', false)
      }).catch(err => {
        console.log(err)
        context.commit('setErrors', {
          errors: err
        })
      })
    }
  },
  modules: {
  }
})
