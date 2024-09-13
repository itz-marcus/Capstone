import { createStore } from 'vuex'
import axios from "axios"
import {useCookies} from "vue-cookies"
import router from '@/router';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


axios.defaults.headers = $cookies.get('token')
axios.defaults.withCredentials = true

export default createStore({
  state: {
    users:null,
    products:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload;
    },
    setProducts(state, payload){
      state.products = payload;
    }
  },
  actions: {
    async fetchUser({commit}){
      let data = await fetch('https://capstone-1-0lcp.onrender.com/users')
      let users = await data.json()
      commit('setUsers', users);
    },
    async insertUser({commit},info){
      let data = await axios.post('https://capstone-1-0lcp.onrender.com/users/insert',info)
      console.log(data);
    },
    async loginUser({commit},info){
      let {data} = await axios.post(`https://capstone-1-0lcp.onrender.com/users/login`,info)
      console.log(data);
      $cookies.set('token', data.token)
      if (data.message) {
        toast("You have logged in successfully", {
          "theme": "auto",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        }
      )
    }
      else{
        toast("username or password  is incorrect! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
      await router.push('/about')
      location.reload()
    },
    async fetchProductsInfo({commit}){
      let {data} = await  axios.get('https://capstone-1-0lcp.onrender.com/products')
      commit('setProducts',data)
     
    },
    async addToCart({commit},id_prod){
      console.log(id_prod);
      let {data} = await axios.post('https://capstone-1-0lcp.onrender.com/products/cart',{id:id_prod})
  }
  },
  modules: {
  }
})
