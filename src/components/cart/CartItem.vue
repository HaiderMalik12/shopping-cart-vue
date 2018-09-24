<template>
    <tr>
        <td>{{cartItem.title}}</td>
        <td><input type="number" class="form-control" min="1" style="width:100px" v-model="cartItem.qty" /> </td>
        <td>${{total}}</td>
        <td>
            <button class="btn btn-danger" @click="removeItem(cartItem)"> Remove</button>
        </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
name: 'CartItem',
methods:{
  ...mapActions(['removeItem'])
},
props:{
    cartItem:{
        type: Object,
        required: true
    }
},
computed:{
    total(){
        return (this.cartItem.qty * this.cartItem.price).toFixed(2);
    }
}
}
</script>

<style>
</style>
