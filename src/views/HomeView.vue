<template>
  <div class="home">
    <video autoplay muted loop id="myVideo">
      <source src="https://itz-marcus.github.io/Capstone-images/bg-video.mp4" type="video/mp4" loading="eager">
    </video>
    <div id="home_title">
      <span id="title">SKATE WITH OUR <b>LIMITED</b> EDITION SHOES</span>
    </div>
    <button class="button">Explore more</button>

    <div id="mid-sec">
      <div id="ad">
        <div id="ad_text">
          <h1 >hi hi</h1>
          <p>bbbbbbbbbbbbbbbrrrrrrrrrrrrrrrrrr</p>
        </div>
        <div>
          <img id="add_img" src="https://itz-marcus.github.io/Capstone-images/add_image.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

</script>
<style>
.home{
  object-fit: contain !important;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100vw; 
  min-height: 100vh;
  z-index: -1;
}
#home_title{
  font-family: "Anton";
  color: white;
  font-family: "Anton", system-ui;
  font-style: normal;
  font-size: 6vw;
  width: 54vw;
  text-align: start;
  margin-top: 17vw;
  margin-bottom: 2vw;
  margin-left: 10vw;
  gap: 1vw;
  line-height: 1.2;
}
#home_title b{
  color: black;
}
/* button */
.button {
  --bg: #ffffff;
  --hover-bg: #000000;
  --hover-text: #ffffff;
  color: #000000;
  cursor: pointer;
  border: 1px solid var(--bg);
  border-radius: 30px;
  padding: 0.8em 2em;
  background: var(--bg);
  transition: 0.2s;
  display: flex;
  margin-left: 10vw;
  width: 13vw;
  font-weight: bold;
  font-size:1.2vw
}

.button:hover {
  color: var(--hover-text);
  transform: translate(-0.25rem, -0.25rem);
  background: var(--hover-bg);
  box-shadow: 0.25rem 0.25rem var(--bg);
}

.button:active {
  transform: translate(0);
  box-shadow: none;
}

/* button */
#mid-sec{
  margin-top: 5vw;
  background-color: #E76F51;
  width: 100vw;
  height: 120vw;
}
#ad{
  top: -2vw;
  background-color: white;
  width: 85vw;
  height: 30vw;
  border-radius: 2vw;
  margin-left: auto;
  margin-right:auto ;
  position: relative;
  display: flex;
  justify-content: space-evenly;
}
#ad_text{
  font-size: 1.5vw;
}
#add_img{
  object-fit: contain;
  width: 35vw;
  display: flex;
  padding-top: 3vw;
  margin-left: 20vw;
}
</style>
