<template lang="">
    <div class="content_title">
        <p class="content_title_text">{{title}}</p>
    </div>
</template>
<script>
export default {
    props : {
            title:{
                type: String,
            },
    },
}
</script>
<style scoped>
    .content_title {
        position: absolute;
        top: 0;
        left: -5%;
        width: 20%;
        height: 100vh;
        display: grid;
        place-items: center;
        z-index: 10;
    }

    .content_title .content_title_text{
        transform: rotateZ(-90deg);
        color:white;
        font-family: 'Krona One', sans-serif;
        text-shadow: 1px 1px 1px black;
        font-size: 0.9rem;
    }

    .content_title::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        width: 2px;
        height: 40vh;
        background:white;
        box-shadow: 0px 0px 1px black;
    }

    .content_title::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 2px;
        height: 40vh;
        background:white;
        box-shadow: 0px 0px 1px black;
    }
</style>