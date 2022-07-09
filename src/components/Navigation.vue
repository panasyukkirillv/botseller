<template>
    
    <!-- Navigation -->
    <nav class="navigation">
        <ul class="list-group rounded-0">

            <router-link to="/">
                <NavigationItem>
                    <span class="bi bi-bell"></span>
                    Уведомления
                </NavigationItem>
            </router-link>

            <router-link to="/messages">
                <NavigationItem>
                    <span class="bi bi-chat"></span>
                    Сообщения
                </NavigationItem>
            </router-link>

            <router-link to="/catalog">
                <NavigationItem>
                    <span class="bi bi-bag"></span>
                    Каталог
                </NavigationItem>
            </router-link>

            <router-link to="/new-orders">
                <NavigationItem>
                    <span class="bi bi-card-list"></span>
                    Текущие заказы
                </NavigationItem>
            </router-link>

            <router-link to="/old-orders">
                <NavigationItem>
                    <span class="bi bi-card-checklist"></span>
                    История заказов
                </NavigationItem>
            </router-link>

            <router-link to="/data">
                <NavigationItem>
                    <span class="bi bi-bar-chart"></span>
                    Статистика
                </NavigationItem>
            </router-link>

            <router-link to="/settings">
                <NavigationItem>
                    <span class="bi bi-gear"></span>
                    Настройки
                </NavigationItem>
            </router-link>

            <router-link to="/">
                <NavigationItem>
                    <span class="bi bi-door-closed"></span>
                    Выйти
                </NavigationItem>
            </router-link>


     















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