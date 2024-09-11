<template>
    <div>
        <h1>Im the admin yo</h1>
        <button @mouseover="button()" class="button" id="noButton">click me for a FREE pair of shoes!!!!</button>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
    methods: {
        button(){
            const yesButton = document.querySelector('#yesButton');
            const noButton = document.querySelector('#noButton');

            const moveNoButton = () => {
            var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
            var y = Math.random() * (window.innerHeight - noButton.offsetHeight);

            noButton.style.position = 'absolute';
            noButton.style.left = `${x}px`;
            noButton.style.top = `${y}px`;
            }

            const catchButton = () => {
                Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
});
            }


            noButton.addEventListener('click',catchButton);
            noButton.addEventListener('mouseenter', moveNoButton);
        }
    },
}

</script>
<style>
  #noButton{
    padding: 3vw;
  }  
</style>