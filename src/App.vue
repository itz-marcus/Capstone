<template>
  <div id="page-container">
    <navbar-comp/>
    <div id="content-wrap">
      <router-view/>
    </div>
    <div>
      <footer-comp/>
    </div>

  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Anton&family=UnifrakturCook&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
*,
*::after,
*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app {
  font-family: "Work Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  overflow-x: hidden;
  font-weight: normal !important;
}
body{
  background-color: #E76F51;
}
#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 10vw;
}
</style>
