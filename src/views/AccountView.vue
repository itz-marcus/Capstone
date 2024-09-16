<template>
    <button @click="signUp = ! signUp">SignUp/Login</button>
    <div class="home" v-if='signUp'>
        <h1>register today!</h1>
        <br>
        <input type="text" v-model="firstname" placeholder="firstname">
        <br>
        <br>
        <input type="text" v-model="lastname" placeholder="lastname">
        <br>
        <br>
        <input type="number" v-model="userAge" placeholder="age">
        <br>
        <br>
        <input type="text" v-model="userEmail" placeholder="email">
        <br>
        <br>
        <input type="password" v-model="userPassword" placeholder="password">
        <br>
        <br>
        <button @click="insertUser()">Sign up</button>
        </div>
        <div class="about" v-else>
        <h1>login in</h1>
        <input type="text" v-model="userEmail" placeholder="email">
        <br>
        <br>
        <input type="password" v-model="userPassword" placeholder="password">
        <br>
        <br>
        <button @click="loginUser()">Login</button>
    </div>
    <!-- v-if="$cookies.get('token')" -->
    <div>
        <button><router-link to="/admin">Admin</router-link></button>
    </div>
</template>
<script>
export default {
    data(){
      return{
        firstname:'',
        lastname:'',
        userAge:'',
        userEmail:'',
        userPassword:'',
        signUp:true
      }
    }, methods:{
        insertUser(){
        this.$store.dispatch('insertUser',this.$data)
      },
      loginUser(){
        this.$store.dispatch('loginUser',this.$data)
        // location.reload()
      },
  }
}
</script>
<style>
    
</style>