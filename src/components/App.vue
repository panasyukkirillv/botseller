
<template>

    <!-- App -->
    <div class="app">

        <Header/>
        <Main/>
        

    </div>
    <!-- / App -->

</template>

<script>

    import Header from '@/components/Header'
    import Main from '@/components/Main'

    export default {
        components: {
            Header,
            Main,
        },
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