<template>
    
    <!-- Main -->
    <main class="main pt-5 pb-2 bg-light">
        <div class="container">
            <div class="row">

                <Sidebar/>

                <Content
                    :products="products"
                        @activate="activateProduct"
                        @deactivate="deactivateProduct" 
                />

            </div>
        </div>
    </main>
    <!-- / Main -->

</template>

<script>

    import Sidebar from '@/components/Sidebar'
    import Content from '@/components/Content'

    export default {
        components: {
            Sidebar,
            Content,
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