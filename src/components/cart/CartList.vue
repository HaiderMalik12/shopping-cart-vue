<template>
    <div>
        <p class="lead">Product Cart</p>
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                <CartItem/>
            </tbody>
        </table>
        <hr/>
        <button class="btn btn-success btn-lg">
            Checkout
            <span>($)</span>
        </button>
    </div>
</template>

<script>
import CartItem from './CartItem.vue';
export default {
 name:'CartList',
 components:{
     CartItem
 }
}
</script>

<style>
</style>
