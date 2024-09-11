<template>
  <navbar-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue';

export default {
   components:{
    NavbarComp,
    FooterComp
   }  
  }
</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  overflow-x: hidden;
}
body{
  background-color: #E76F51;
}

</style>
