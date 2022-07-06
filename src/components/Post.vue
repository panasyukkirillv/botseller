<template>
    
    <div class="post">
        <h3 class="post__title">{{post.title}}</h3>
        <p class="post__description">{{post.description}}</p>
        <div class="post__boxes">
            <div class="post__box">
                <p class="post__info post__info--likes"><b>Likes:</b> {{post.likes}}</p>
                <button class="post__button post__button--like">Like</button>
            </div>
            <div class="post__box">
                <p class="post__info post__info--dislikes"><b>Dislikes:</b> {{post.dislikes}}</p>
                <button class="post__button post__button--dislike">Dislike</button>
            </div>
        </div>
    </div>

</template>

<script>

    export default {

        props: {
            post: {
                type: Object,
                required: true,
            }
        },


    }

</script>