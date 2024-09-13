<template>
    <div v-if="products()">
      <div v-for="product in products()" :key="product">
       <H1>{{ $store.state.products.prodBrand }} {{ $store.state.products.prodName }}</H1>
       <br>
       <p>{{ $store.state.products.prodDesc }}</p>
       <br> 
       <p>{{ $store.state.products.prodPrice }}</p> 
       
    </div>  
    </div>
    
</template>
<script>
export default {
  methods:{
    getProducts(){
            this.$store.dispatch('fetchProductsInfo')
        },
    products(){
            return this.$store.state.products
        },
  },
  mounted() {
        this.getProducts()
    }, 
}
</script>
<style>
    
</style>