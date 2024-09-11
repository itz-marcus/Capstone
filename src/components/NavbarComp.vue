<template>
    <div id="navbar">
      <img id="logo" src="https://itz-marcus.github.io/Capstone-images/Logo.png" alt="">
      <nav id="mainNav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About us</router-link>
        <router-link to="/products">Store</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav> 
      <nav id="secNav">
        <router-link to="/account"><i class="las la-user"></i></router-link>
        <router-link to="/cart"><i class="las la-shopping-basket"></i></router-link>
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
  position: sticky;
  top: 0;
  overflow: hidden;
  backdrop-filter: blur(2px);
  
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
  font-size: 1.3vw;
}

#mainNav a {
  text-decoration: none;
  font-weight: bold;
  color: black;
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
  color: #fca40d;
} 
</style>