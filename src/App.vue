<template>

    <div class="container">

        <h1>Blog</h1>

        <PostCreator/>
        <Posts :posts="posts"/>

    </div>

</template>

<script>

    import Posts from "@/components/Posts"
    import PostCreator from "@/components/PostCreator"

    export default {
        components: {
            PostCreator,
            Posts,
        },
        data() {
            return {
                posts: [
                    {id: 1, title: "Post Title #1", description: "Post Title Description #1", likes: 0, dislikes: 0},
                    {id: 2, title: "Post Title #2", description: "Post Title Description #2", likes: 0, dislikes: 0},
                    {id: 3, title: "Post Title #3", description: "Post Title Description #3", likes: 0, dislikes: 0},
                    {id: 4, title: "Post Title #4", description: "Post Title Description #4", likes: 0, dislikes: 0},
                    {id: 5, title: "Post Title #5", description: "Post Title Description #5", likes: 0, dislikes: 0},
                    {id: 6, title: "Post Title #6", description: "Post Title Description #6", likes: 0, dislikes: 0},
                    {id: 7, title: "Post Title #7", description: "Post Title Description #7", likes: 0, dislikes: 0},
                    {id: 8, title: "Post Title #8", description: "Post Title Description #8", likes: 0, dislikes: 0},
                    {id: 9, title: "Post Title #9", description: "Post Title Description #9", likes: 0, dislikes: 0},
                ],
                title: '',
                description: '',
            }
        },
        methods: {
            createPost() {
                this.posts.push({
                    id: this.posts[this.posts.length - 1].id + 1,
                    title: this.title,
                    description: this.description,
                });
                this.title = '';
                this.description = '';
            },
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
    }

    html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    li {
        margin: 0;
        padding: 0;
    }

    .container {
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .post {
        display: block;
        margin: 10px 0;
        padding: 10px;
        border-radius: 10px;
        background: lightgreen;
    }

    .post__title {
        font-weight: 700;
        font-size: 18px;
    }


    .post__description {
        font-weight: 500;
        font-size: 14px;
    }

    .post__boxes {
        display: flex;
        align-items: flex-start;
    }

    .post__box {
        flex: 0 0 auto;
        width: 50%;
        padding: 10px;
    }

    .post__info {
        display: block;
        margin: 0;
        padding: 10px;
        border-radius: 10px;
        background: white;
    }

    .post__info--likes {
        color: blue;
    }

    .post__info--dislikes {
        color: red;
    }

    .post__button {
        display: block;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        border-radius: 10px;
        border: 0;
        color: white;
    }

    .post__button--like {
        background: blue;
    }

    .post__button--dislike {
        background: red;
    }


    .post-creator__input,
    .post-creator__textarea {
        display: block;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid black;
    }
    

</style>