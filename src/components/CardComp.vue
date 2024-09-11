<template>
    <div v-if="products() ">
        <section v-for="product in products()" :key="product">
            {{ product.prodID }}
            {{ product.prodName }}
            {{ product.prodDesc }}
            {{ product.prodPrice }}
            <br><br>
            <button @click="addToCart(product.prodID)">Purchase {{ product.prodName }}</button>
            <hr>
        </section>
    </div>
    <div v-else>
        <spinner-comp/>
    </div>
</template>
<script>
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
    
</style>