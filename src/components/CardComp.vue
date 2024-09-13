<template>
    <div v-if="products()" id="card">
        <section v-for="product in products()" :key="product">
            <div>
                <div class="card" style="width: 18rem;">
                    <img id="img" :src="product.prodImage" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.prodBrand }} {{ product.prodName }}</h5>
                        <p class="card-text">{{ product.prodPrice }}</p>
                        <a href="#" class="btn btn-primary" @click="addToCart(product.prodID)" v-if="$cookies.get('token')">Purchase</a>
                        
                        <router-link :to="{name:'product',params:{id:product.prodID}}"><button>View More</button></router-link>
                    </div>
                </div>
                <br>
            </div>
        </section>
    </div>
    <div v-else>
        <spinner-comp/>
    </div>
</template>
<script scoped>
import SpinnerComp from './SpinnerComp.vue';

    export default{
        components:{
            SpinnerComp
        },
      methods:{
        getProducts(){
            this.$store.dispatch('fetchProductsInfo')
        },
        products(){
            return this.$store.state.products
        },
        addToCart(id_prod){
            this.$store.dispatch('addToCart',id_prod)
        }
    },
    mounted() {
        this.getProducts()
    },
  }
</script>
<style>
#card{
    display: grid;
    grid-template-columns: repeat(5,1fr);
}
#img{
object-fit: contain;
}
section{
    width: fit-content;
}
</style>