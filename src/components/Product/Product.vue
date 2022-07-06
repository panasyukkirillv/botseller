<template>

    <div class="col mt-2 mb-2">
        <div class="card">
            <div class="card-body">
                <span class="badge text-bg-primary">{{ product.price }} ₽</span>
                <h3 class="card-title mt-2">{{ product.title }}</h3>
                <p class="card-text">{{ product.description }}</p>
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
    }

</script>