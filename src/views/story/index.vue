<template lang="">
    <div class="story_box content_box">
        <v-title title="STORY" />
        <div class="story_text">
            <p>蝶屋敷での修業を終えた炭治郎たちは、<br/>
                次なる任務の地、<br/>
                《無限電車》に到着する。<br/>
                そこでは、<br/>
                短期間のうちに四十人以上もの人が行方不明になっているという。
                <br/>
                禰豆子を連れた炭治郎と善逸、伊之助の一行は、<br/>
                鬼殺隊最強の剣士である《柱》のひとり、<br/>
                炎柱の煉󠄁獄杏寿郎と合流し、<br/>
                闇を往く《無限電車》のなかで、<br/>
                鬼と立ち向かうのだった。</p>
        </div>
        <div class="story_video">
            <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions"
            >
            </video-player>
        </div>
        <div class="story_play_bottom" @click="handleControlIsShow">
            <img src='../../assets/play.png' alt="">
        </div>
        <div v-if="isShow" class="story_youtube_box">
            <div class="story_youtube">
                <iframe src="https://www.youtube.com/embed/AmmGFW4ycOo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="story_close_bottom" @click="handleControlIsShow"></div>
            </div>
        </div>
        <scrollButton Anchor="#character" />
    </div>
</template>
<script>
export default {
    name: "story",

    data() {
        return {
            playerOptions: {
                //播放速度
                playbackRates: [0.5, 1.0, 1.5, 2.0], 
                //如果true,浏览器准备好时开始回放。
                autoplay: true, 
                // 默认情况下将会消除任何音频。
                muted: true, 
                // 导致视频一结束就重新开始。
                loop: true, 
                // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                preload: 'auto', 
                language: '',
                 // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                aspectRatio: '16:9',
                 // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                fluid: true,
                sources: [{
                    //类型
                    type: "video/ogg",
                    //url地址
                    src: require('../../assets/story.mp4'), 
                }],
                //你的封面地址
                poster: '', 
                 //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                notSupportedMessage: '此视频暂无法播放，请稍后再试',
                controlBar: false,
                controls: false,
            },
            isShow : false, 
        }
    },

    methods: {
        handleControlIsShow(){
            this.isShow = !this.isShow;
        }
    }
}
</script>
<style scoped>
.story_box {
    background-color: black;
    position: relative;
    width: 100%;
    height: 100vh;
}

.story_text {
    position: absolute;
    display: flex;
    right: 3rem;
    bottom: 3rem;
    color: white;
    text-shadow: 1px 1px 2px red;
    z-index: 10;
    font-size:0.8rem;
    text-align: right;
    font-family: "Sawarabi Mincho";
}

.story_video {
    display: grid;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}

.story_video video {
    width: 100%;
}

.story_play_bottom {
    position: absolute;
    top: 50%;
    left: 50%;
    transform : translate(-50%, -50%);
    width: 2rem;
    z-index: 20;
}

.story_play_bottom img {
    width: 100%;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.story_play_bottom img:hover {
    transform : scale(1.2);
}

.story_youtube_box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    display : grid;
    place-items: center;
}

.story_youtube {
    width: 60%;
    height: 33.75vw;
    min-height: 405px;
    position: relative;
}

.story_youtube_box iframe{
    width: 100%;
    height: 100%;
}

.story_close_bottom {
    position: absolute;
    top: -30px;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.story_close_bottom::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: rotate(45deg);
    background-color: white;
}

.story_close_bottom::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: rotate(-45deg);
    background-color: white;
}
</style>