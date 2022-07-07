<template>

    <div class="row">
        <div class="col">
            <div class="input-group">
                <input v-model="product.department" type="text" class="form-control" placeholder="Категория">
            </div>
            <div class="input-group">
                <input v-model="product.brand" type="text" class="form-control" placeholder="Бренд">
            </div>
            <div class="input-group">
                <input v-model="product.model" type="text" class="form-control" placeholder="Модель">
            </div>
            <div class="input-group">
                <input v-model="product.price" type="text" class="form-control" placeholder="Цена">
            </div>
            <div class="input-group">
                <textarea v-model="product.description" class="form-control" placeholder="Описание товара"></textarea>
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
                    department: "",
                    brand: "",
                    model: "",
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
                    department: "",
                    brand: "",
                    model: "",
                    description: "",
                    price: "",
                };
            },
        },
    };

</script>