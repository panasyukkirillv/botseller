<template>


    <h2>Posts</h2>

    <div class="posts">

        <Post v-for="post in posts" :post="post"/>

    </div>


</template>

<script>

    import Post from '@/components/Post'

    export default {
        components: {
            Post,
        },
        props: {
            posts: {
                type: Array,
                required: true,
            },
        },
    }

</script>