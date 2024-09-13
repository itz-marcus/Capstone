<template>
    <div id="footer">
       <h1 id="footer_cont"><div id="foot"><div class="cr">Copyright © {{ date()}} .pivot. <br> by Marcus Adonis</div> </div></h1> 
    </div>
</template>
<script>
export default {

methods:{
  date() {
  const d = new Date();
  return d.getFullYear();
  }
}
}
</script>
<style>
  #footer{
    height: 5vw;
    width: 100vw;
    position: absolute;
    bottom: 0;
    background-color: rgb(255, 255, 255);
}
#footer_cont{
    display: flex;
    text-align: center;
    font-size: 1.3vw;
    justify-content: center;
  }
</style>