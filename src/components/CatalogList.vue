<template>

    <!-- Catalog List -->
    <div class="row row-cols-1">

        <CatalogItem v-for="product in products" :product="product"
            :key="product.id"
            @activate="$emit('activate', product)"
            @deactivate="$emit('deactivate', product)"
        />

    </div>
    <!-- / Catalog List -->

</template>

<script>

    import CatalogItem from '@/components/CatalogItem'

    export default {
        components: {
            CatalogItem,
        },
        props: {
            products: {
                type: Array,
                required: true,
            },
        },
    }

</script>