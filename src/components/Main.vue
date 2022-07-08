<template>
    
    <!-- Main -->
    <main class="main pt-5 pb-2 bg-light">
        <div class="container">
            <div class="row">

                <Sidebar/>

                <Content/>



            </div>
        </div>
    </main>
    <!-- / Main -->

</template>

<script>

    import Sidebar from '@/components/Sidebar'
    import Content from '@/components/Content'

    export default {
        components: {
            Sidebar,
            Content,
        },
    }

</script>