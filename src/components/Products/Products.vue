<template>

    <div class="row">
        <div class="col">
            <div class="row row-cols-1">
                <Product @removeProduct="removeProduct" v-for="product in products" :product="product"/>
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
        methods: {
            removeProduct(id) {
                this.$emit('removeProduct', id);
            }
        },
    }

</script>