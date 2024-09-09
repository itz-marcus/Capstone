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
body{
  background-color: #E76F51;
}

</style>
