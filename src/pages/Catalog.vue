<template>

    <ContentTitle>
        <span class="bi bi-bag"></span>
        Каталог
    </ContentTitle>

    <CatalogList 
        :products="products" 
        @activate="activateProduct"
        @deactivate="deactivateProduct"
    />

</template>

<script>

    import ContentTitle from '@/components/ContentTitle'
    import CatalogList from '@/components/CatalogList'

    export default {
        components: {
            ContentTitle,
            CatalogList,
        },
        props: {
            products: {
                type: Array,
                required: true,
            },
        },
        methods: {
            activateProduct (product) {
                this.$emit('activate', product)
            },
            deactivateProduct (product) {
                this.$emit('deactivate', product)
            },
        },
    }
</script>