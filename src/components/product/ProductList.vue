<template>
    <div>
        <ProductListItem v-for="product in productItems" :key="product.id" :product="product" />
    </div>
</template>

<script>
import ProductListItem from './ProductListItem.vue';
import {mapGetters} from 'vuex';
export default {
name :'ProductList',
components:{
    ProductListItem
},
computed:{
    ...mapGetters(['productItems'])
},
created(){
    this.$store.dispatch('fetchProducts');
}
}
</script>

<style>
</style>
