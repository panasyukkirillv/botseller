<template>

    <div class="container">

        <h1>BotSeller</h1>

        <div class="row">

            <div class="col col-12 col-lg-6">
                <Manager @addProduct="addProduct"/>
            </div>

            <div class="col col-12 col-lg-6">
                <Products :products="catalog.products"/>
            </div>

        </div>

    </div>    

</template>

<script>

    import Manager from '@/components/Manager/Manager'
    import Products from '@/components/Products/Products'

    export default {
        components: {
            Manager,
            Products,
        },
        data() {
            return {
                catalog: {
                    products: [
                        {id: 0, title: "Adidas Advantage Base", description: "Кроссовки мужские", price: "4 999"},
                        {id: 1, title: "Adidas Response Super", description: "Кроссовки мужские", price: "6 399"},
                        {id: 2, title: "Adidas Climacool", description: "Кроссовки мужские", price: "11 999"},
                        {id: 3, title: "Adidas Response Super", description: "Кроссовки мужские", price: "6 399"},
                        {id: 4, title: "Adidas Swift Run X", description: "Кроссовки мужские", price: "6 399"},
                        {id: 5, title: "Adidas Questar Flow Nxt", description: "Кроссовки мужские", price: "6 399"},
                        {id: 6, title: "Adidas 10K", description: "Кроссовки мужские", price: "6 399"},
                        {id: 7, title: "Adidas Alphatorsion M", description: "Кроссовки мужские", price: "8 699"},
                    ],
                },
            }
        },
        methods: {
            addProduct(product) {
                this.catalog.products.push(product);
                console.log(this.catalog.products);
            },
        },
    }

</script>