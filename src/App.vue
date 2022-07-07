<template>

    <div class="container">
        <div class="row">

            <div class="col col-12 col-lg-6">
                <Manager @addProduct="addProduct"/>
            </div>

            <div class="col col-12 col-lg-6">
                <Products @removeProduct="removeProduct" :products="catalog.products"/>
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
                        { id: 0, department:"Кроссовки мужские", brand: "Adidas", model: "Climacool", description: "Кроссовки для бега Climacool от adidas — прекрасный выбор для эффективных тренировок в жаркую погоду.", price: "11 999", image: "https://cdn.sptmr.ru/upload/resize_cache/iblock/613/800_800_1/67818510299.jpg" },
                        { id: 1, department:"Кроссовки мужские", brand: "Fila", model: "Shocket Run", description: "Инновационные беговые кроссовки FILA Shoket Run — оптимальное сочетание функциональности и дизайна.", price: "14 299", image: "https://cdn.sptmr.ru/upload/resize_cache/iblock/43a/800_800_1/65999560299.jpg" },
                        { id: 2, department:"Кроссовки мужские", brand: "Kappa", model: "Authentic Run", description: "Kappa Authentic Run вдохновлены модой 90-х, выполнены по современным технологиям.", price: "6 799", image: "https://cdn.sptmr.ru/upload/resize_cache/iblock/848/800_800_1/47098290299.jpg" },
                        { id: 3, department:"Кроссовки мужские", brand: "Nike", model: "Defy All Day", description: "В кроссовках Nike Defy All Day ты можешь не бояться вызовов, которые приготовил для тебя новый день. Комфортная модель с продуманным дизайном — идеальный вариант для универсального образа в спортивном стиле.", price: "6 999", image: "https://cdn.sptmr.ru/upload/resize_cache/iblock/75b/800_800_1/47439310299.jpg" },
                        { id: 4, department:"Кроссовки мужские", brand: "Puma", model: "St Runner V3 L", description: "Классический силуэт кроссовок ST Runner v3, дополненный функциональной отделкой задника, не оставит равнодушным истинного ценителя спортивного стиля.", price: "7 999", image: "https://cdn.sptmr.ru/upload/resize_cache/iblock/cab/800_800_1/66647990299.jpg" },
                        { id: 5, department:"Кроссовки мужские", brand: "Reebok", model: "Zig Kinetica 2.5 Plus", description: "Кроссовки Zig Kinetica 2.5 Plus — удачное сочетание современного силуэта и винтажных деталей.", price: "14 999", image: "https://cdn.sptmr.ru/upload/resize_cache/iblock/23d/800_800_1/66125980299.jpg" },
                    ],
                },
            }
        },
        methods: {
            addProduct(product) {
                this.catalog.products.push(product);
            },
            removeProduct(id) {

                let newProducts = [];

                this.catalog.products.forEach((product) => {
                    if (product.id != id) {
                        newProducts.push(product);
                    }
                });
                
                this.catalog.products = newProducts;

            },
        },
    }

</script>
