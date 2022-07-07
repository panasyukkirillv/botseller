<template>

    <div class="col">
        <div class="card">
            <div class="row g-0">
                <div class="card-body">
                    <h5 class="card-title mt-2">{{ product.department + ' ' + product.brand + ' ' + product.model }}</h5>
                    <p class="card-text"><small class="text-muted">{{ product.description }}</small></p>
                    <span class="badge text-bg-primary mt-2">{{ product.price }} ₽</span>
                    <div class="d-block btn-group mt-2">
                        <button type="button" class="btn btn-primary" :data-id="product.id">Редактировать</button>
                        <button @click="removeProduct" type="button" class="btn btn-primary" :data-id="product.id">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        props: {
            product: {
                type: Object,
                required: true,
            },
        },
        methods: {
            removeProduct(event) {
                this.$emit('removeProduct', event.target.dataset.id);
            }
        },
    }

</script>