<template>
    <tr>
        <td>{{cartItem.title}}</td>
        <td><input type="number" class="form-control" min="1" style="width:100px" :value="cartItem.qty" /> </td>
        <td>${{cartItem.price}}</td>
        <td>
            <button class="btn btn-danger"> Remove</button>
        </td>
    </tr>
</template>

<script>
export default {
name: 'CartItem',
props:{
    cartItem:{
        type: Object,
        required: true
    }
}
}
</script>

<style>
</style>
