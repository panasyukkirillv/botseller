
<template>

        <!-- Header -->
        <header class="header py-2 bg-dark fixed-top">
            <div class="container">
                <h1 class="mb-0 fw-light fs-4 text-light"><span class="bi bi-robot"></span> botseller</h1>
            </div>
        </header>
        <!-- / Header -->

        <!-- Main -->
        <main class="main pt-5 pb-2 bg-light">
            <div class="container">
                <div class="row">

                    <!-- Sidebar -->
                    <div class="mb-2 mb-lg-0 sidebar col-12 col-lg-3">
                        
                        <!-- Navigation -->
                        <nav class="navigation">
                            <ul class="list-group rounded-0">
                                <li class="list-group-item p-0"><a class="btn btn-primary btn-sm d-block rounded-0 text-start active" href="#"><span class="bi bi-bell"></span> Уведомления</a></li>
                                <li class="list-group-item p-0"><a class="btn btn-primary btn-sm d-block rounded-0 text-start" href="#"><span class="bi bi-person"></span> Мой профиль</a></li>
                                <li class="list-group-item p-0"><a class="btn btn-primary btn-sm d-block rounded-0 text-start" href="#"><span class="bi bi-bag"></span> Каталог</a></li>
                                <li class="list-group-item p-0"><a class="btn btn-primary btn-sm d-block rounded-0 text-start" href="#"><span class="bi bi-card-list"></span> Текущие заказы</a></li>
                                <li class="list-group-item p-0"><a class="btn btn-primary btn-sm d-block rounded-0 text-start" href="#"><span class="bi bi-card-checklist"></span> История заказов</a></li>
                                <li class="list-group-item p-0"><a class="btn btn-primary btn-sm d-block rounded-0 text-start" href="#"><span class="bi bi-bar-chart"></span> Статистика</a></li>
                                <li class="list-group-item p-0"><a class="btn btn-primary btn-sm d-block rounded-0 text-start" href="#"><span class="bi bi-gear"></span> Настройки</a></li>
                                <li class="list-group-item p-0"><a class="btn btn-primary btn-sm d-block rounded-0 text-start" href="#"><span class="bi bi-door-closed"></span> Выйти</a></li>
                            </ul>
                        </nav>
                        <!-- / Navigation -->

                    </div>
                    <!-- / Sidebar -->

                    <!-- Content -->
                    <div class="mb-2 mb-lg-0 content col-12 col-lg-9">
                        
                        CONTENT

                    </div>
                    <!-- / Content -->

                </div>
            </div>
        </main>
        <!-- / Main -->

</template>

<script>

    export default {
        data() {
            return {

            }
        }
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