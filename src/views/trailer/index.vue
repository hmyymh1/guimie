<template lang="">
    <div class="trailer_box content_box">
        <v-title title='TRAILER' />
        <div class="trailer_video_wrapper">
            <div v-if="played == 1" class="trailer_video_box">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qHUpPzDVv7g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div v-else-if="played == 2" class="trailer_video_box">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EFUSUcbLHK0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div v-else-if="played == 3" class="trailer_video_box">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-ewm56D9DzY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div v-else-if="played == 4" class="trailer_video_box">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AmmGFW4ycOo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div v-else-if="played == 5" class="trailer_video_box">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hpLluEaD6XI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div v-else-if="played == 6" class="trailer_video_box">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eUW4ExaHNZA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="trailer_img_wrapper">
            <div class="trailer_img_box" @click="played = 1" :class="{trailer_img_play:played == 1}">
                <img src="@/assets/trailer11.jpg" alt="">
            </div>
            <div class="trailer_img_box" @click="played = 2" :class="{trailer_img_play:played == 2}">
                <img src="@/assets/trailer22.jpg" alt="">
            </div>
            <div class="trailer_img_box" @click="played = 3" :class="{trailer_img_play:played == 3}">
                <img src="@/assets/trailer33.jpg" alt="">
            </div>
            <div class="trailer_img_box" @click="played = 4" :class="{trailer_img_play:played == 4}">
                <img src="@/assets/trailer44.jpg" alt="">
            </div>
            <div class="trailer_img_box" @click="played = 5" :class="{trailer_img_play:played == 5}">
                <img src="@/assets/trailer55.jpg" alt="">
            </div>
            <div class="trailer_img_box" @click="played = 6" :class="{trailer_img_play:played == 6}">
                <img src="@/assets/trailer66.jpg" alt="">
            </div>
        </div>
        <scrollButton Anchor="#music" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            played:"1",
            
        }
    },
}
</script>
<style scoped>
    .trailer_box {
    background-image: url("../../assets/trailer_BG.png");
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    position: relative;
}

.trailer_video_wrapper {
    position: absolute;
    top: 19%;
    left: 50%;
    transform: translateX(-50%);
    display:grid;
    place-items: center;
    z-index: 10;
    background-color: black;
}

.trailer_video_box {
    width: calc(5.6*3.2rem);
    height: calc(3.15*3.2rem);
    display:block;
}

.trailer_img_wrapper {
    width: 12.8rem;
    height: 9.6rem;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    display: grid;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(4,1fr); 
    grid-gap: 10px;   
}

.trailer_img_box {
    width: 3.2rem;
    height: 3.2rem;
    overflow : hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: brightness(0.5);
    transition: filter 0.5s;
    border: 3px solid transparent;
}

.trailer_img_box:hover {
    filter: brightness(1); 
}

.trailer_img_play {
    filter: brightness(1); 
    border-image-source: radial-gradient(rgb(11, 255, 194) 50%,rgba(0, 0, 0, 0));
    border-image-slice: 1;
    border-image-repeat: stretch;  
}

.trailer_img_box:nth-child(1){
    grid-row-start: 3;
    grid-column-start: 1;
}

.trailer_img_box:nth-child(2){
    grid-row-start: 3;
    grid-column-start: 2;
}

.trailer_img_box:nth-child(3){
    grid-row-start: 2;
    grid-column-start: 2;
}

.trailer_img_box:nth-child(4){
    grid-row-start: 2;
    grid-column-start: 3;
}

.trailer_img_box:nth-child(5){
    grid-row-start: 1;
    grid-column-start: 3;
}

.trailer_img_box:nth-child(6){
    grid-row-start: 1;
    grid-column-start: 4;
}

.trailer_img_box img{
    width: 100%;
    cursor: pointer;
}
</style>