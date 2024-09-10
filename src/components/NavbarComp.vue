<template>
    <div id="navbar">
      <img id="logo" src="https://itz-marcus.github.io/Capstone-images/Logo.png" alt="">
      <nav id="mainNav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About us</router-link>
        <router-link to="/products">Store</router-link>
        <router-link to="/products">Contact</router-link>
      </nav> 
      <nav id="secNav">
        <router-link to="/"><i class="las la-user"></i></router-link>
        <router-link to="/about"><i class="las la-shopping-basket"></i></router-link>
      </nav> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#navbar{
  display: flex;
  /* justify-content: space-evenly; */
  margin-left: auto;
  margin-right: auto;
}
   #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo{
object-fit: contain;
width: 10vw;
padding-left: 3vw;
margin-top: 1.5vw;
}

#mainNav {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5vw;
  background-color: white;
  width: 43vw;
  height: 4vw;
  border-radius: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

#mainNav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  margin-left: auto;
  margin-right: auto;
}

#secNav{
  margin-right: 3vw;
  margin-top: 1.5vw;
  background-color: rgb(0, 0, 0);
  width: 8vw;
  height: 4vw;
  border-radius: 1.2vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2.1vw;
}

#secNav a {
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
}

#mainNav a.router-link-exact-active {
  color: #42b983;
} 
</style>