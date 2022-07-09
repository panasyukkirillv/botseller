<template>

    <!-- Catalog Item -->
    <div class="col mb-2">
        <div class="card rounded-0">
            <div class="card-body">
                <div class="row">
                    <div class="col-12 col-lg-4 mb-4 mb-lg-0">
                        <img class="card-img-top mb-2" :src="product.image" alt="no-photo-available">
                        <div class="badge d-block mb-2 p-2 rounded-0" :class="{ 'text-bg-success': product.status, 'text-bg-danger': !product.status }" v-text="product.status ? 'Активирован' : 'Деактивирован'"></div>
                        <div class="btn-group w-100">
                            <button class="btn btn-primary w-100 rounded-0" data-bs-toggle="dropdown" type="button">
                                <i class="bi bi-three-dots"></i>
                            </button>
                            <ul class="dropdown-menu w-100 rounded-0">
                                <li v-if="!product.status">
                                <button @click="$emit('activate', product)" class="dropdown-item" type="button"><i class="bi bi-play"></i> Активировать</button></li>
                                <li v-else><button @click="$emit('deactivate', product)" class="dropdown-item" type="button"><i class="bi bi-pause"></i> Деактивировать</button></li>
                                <li><button class="dropdown-item" type="button"><i class="bi bi-pencil"></i> Редактировать</button></li>
                                <li><button class="dropdown-item" type="button"><i class="bi bi-trash"></i> Удалить</button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <h2 class="card-title fs-5">{{ product.name }}</h2>
                        <p class="cart-text text-truncate">{{ product.description }}</p>
                        <div class="accordion mb-2">
                            <div class="accordion-item rounded-0">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse-' + product.id">Описание</button>
                                </h2>
                                <div :id="'collapse-' + product.id" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p class="cart-text">{{ product.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="list-group rounded-0">
                            <li class="list-group-item">Цена: {{ product.prices.new }}</li>
                            <li class="list-group-item">Новая цена: {{ product.prices.new }}</li>
                            <li class="list-group-item">Старая цена: {{ product.prices.old }}</li>
                            <li class="list-group-item">Скидка: {{ product.sale }}</li>
                            <li class="list-group-item">Количество: {{ product.qunatity }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- / Catalog Item -->

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