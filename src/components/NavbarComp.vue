<template>
    <div id="navbar">
      <img id="logo" src="https://itz-marcus.github.io/Capstone-images/Logo.png">
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
<style scoped>
  #navbar{
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position:sticky;
  top: 0;
  overflow: hidden;
  backdrop-filter: blur(2px);
  z-index:1;
}

#logo{
object-fit: contain;
width: 14vw;
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
  font-weight:500;
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
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
}

#mainNav a:hover {
  color: #E76F51;
  transition: 0.3s;
}

#mainNav a.router-link-exact-active {
  color: #fca40d;
} 
</style>