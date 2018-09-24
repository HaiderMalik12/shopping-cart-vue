<template>
    <div class="card product-card">
        <div class="card-header">
            {{product.title}}
        </div>
        <div class="card-body">
            <p class="card-text">{{product.description}}</p>
            <p class="text-primary"> ${{product.price}} </p>
            <button class="btn btn-primary">Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
name: 'ProductListItem',
props: {
    product:{
        type: Object,
        required:true
    }
}
}
</script>

<style>
</style>
