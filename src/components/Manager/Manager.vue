<template>

    <div class="row">
        <div class="col">

            <h2>Менеджер</h2>

            <div class="input-group mb-3">
                <input v-model="product.title" type="text" class="form-control" placeholder="Название товара">
            </div>

            <div class="input-group mb-3">
                <textarea v-model="product.description" class="form-control" placeholder="Описание товара"></textarea>
            </div>

            <div class="input-group mb-3">
                <input v-model="product.price" type="text" class="form-control" placeholder="Цена">
            </div>

            <button @click="addProduct" type="button" class="btn btn-primary">Добавить товар</button>

        </div>
    </div>


</template>

<script>

    export default {
        data() {
            return {
                product: {
                    title: "",
                    description: "",
                    price: "",
                },
            }
        },
        methods: {
            addProduct() {
                this.product.id = Date.now();
                this.$emit('addProduct', this.product);
                this.product = {
                    title: "",
                    description: "",
                    price: "",
                };
            },
        },
    };

</script>