
<template>

    <!-- App -->
    <div class="app">

        <Header/>

        <Main 
            :products="products" 
            @activate="activateProduct"
            @deactivate="deactivateProduct"
        />

    </div>
    <!-- / App -->

</template>

<script>

    import Header from '@/components/Header'
    import Main from '@/components/Main'

    export default {
        components: {
            Header,
            Main,
        },
        data() {
            return { 
                products: [
                    { 
                        id: 0,
                        name: "Product Name #1",
                        description: "Product Description #1",
                        prices: {
                            new: 0,
                            old: 0,
                        },
                        sale: 0,
                        quantity: 0, 
                        image: "https://w-cdn1.mouzenidis.com/userfiles/images/adaptive/no-photo-available.png",
                        status: true,
                    },
                    { 
                        id: 1,
                        name: "Product Name #2",
                        description: "Product Description #2",
                        prices: {
                            new: 0,
                            old: 0,
                        },
                        sale: 0,
                        quantity: 0, 
                        image: "https://w-cdn1.mouzenidis.com/userfiles/images/adaptive/no-photo-available.png",
                        status: false,
                        
                    },
                    { 
                        id: 2,
                        name: "Product Name #3",
                        description: "Product Description #3",
                        prices: {
                            new: 0,
                            old: 0,
                        },
                        sale: 0,
                        quantity: 0, 
                        image: "https://w-cdn1.mouzenidis.com/userfiles/images/adaptive/no-photo-available.png",
                        status: true,
                    },
                    { 
                        id: 3,
                        name: "Product Name #4",
                        description: "Product Description #4",
                        prices: {
                            new: 0,
                            old: 0,
                        },
                        sale: 0,
                        quantity: 0, 
                        image: "https://w-cdn1.mouzenidis.com/userfiles/images/adaptive/no-photo-available.png",
                        status: false,
                    },
                    { 
                        id: 4,
                        name: "Product Name #5",
                        description: "Product Description #5",
                        prices: {
                            new: 0,
                            old: 0,
                        },
                        sale: 0,
                        quantity: 0, 
                        image: "https://w-cdn1.mouzenidis.com/userfiles/images/adaptive/no-photo-available.png",
                        status: false,
                    },
                ],
            }
        },
        methods: {
            activateProduct (product) {
                this.products.forEach((item) => {
                    if (item.id === product.id) {
                        item.status = true;
                    }
                });
            },
            deactivateProduct (product) {
                this.products.forEach((item) => {
                    if (item.id === product.id) {
                        item.status = false;
                    }
                });
            },
        },
    }

</script>

<style>

    :root {
        box-sizing: border-box;
        font: normal normal 400 16px/1.5 'Roboto', sans-serif;
        color: #000;
    }

    *,
    ::before,
    ::after {
        box-sizing: inherit;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

</style>