<template>

    <div class="row">
        <div class="col">
            <h2>Товары</h2>
            <div class="row row-cols-1">
                <Product v-for="product in products.slice().reverse()" :product="product"/>
            </div>
        </div>
    </div>

</template>

<script>

    import Product from '@/components/Product/Product'

    export default {
        components: {
            Product,
        },
        props: {
            products: {
                type: Array,
                required: true,
            },
        },
    }

</script>