<template>
    
    <!-- Navigation -->
    <nav class="navigation">
        <ul class="list-group rounded-0">

            <NavigationItem>Уведомления</NavigationItem>
            <NavigationItem>Сообщения</NavigationItem>
            <NavigationItem>Каталог</NavigationItem>
            <NavigationItem>Текущие заказы</NavigationItem>
            <NavigationItem>История заказов</NavigationItem>
            <NavigationItem>Статистика</NavigationItem>
            <NavigationItem>Настройки</NavigationItem>
            <NavigationItem>Выйти</NavigationItem>

        </ul>
    </nav>
    <!-- / Navigation -->

</template>

<script>

    import NavigationItem from '@/components/NavigationItem'

    export default {
        components: {
            NavigationItem,
        },
    }

</script>