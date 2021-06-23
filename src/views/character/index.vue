<template lang="">
    <div class="character_box">
        <v-title title="CHARACTER" />
        <div class="character_wrapper">
            <div v-for="(item,index) in dataList" class="character" :class="{character_clicked:item.clicked, character_unclicked:item.unclicked}" @click="handleClicked(index)">
                <div v-if="index & 2 != 0" class="character_img scrollreveal_top"></div>
                <div v-else class="character_img scrollreveal_bottom"></div>
                <div class="character_text_box">
                    <div class="character_staff">
                        <p class="character_name">{{item.name}}</p>
                        <p class="character_cv">CV:{{item.cv}}</p>
                    </div>
                    <div class="character_text">
                        <p>{{item.text}}</p>
                    </div>
                </div>
            </div>
        </div>
        <scrollButton Anchor="#trailer" />
    </div>
</template>
<script>

import scrollReveal from 'scrollreveal'

export default {
    name: "character",

    data() {
        return {
            scrollReveal: scrollReveal(),
            dataList:[
                {
                    name:"竈門炭治郎",
                    cv:"花江夏樹",
                    text:"心優しい少年。鬼と化してしまった妹を人間に戻すため、鬼に殺された家族の仇を討つため、鱗滝左近次の元での修業を経て、鬼殺隊に入隊する。「水の呼吸」のほかに那田蜘蛛山の任務にて「ヒノカミ神楽」を身につける。蟲柱・胡蝶しのぶの屋敷にて訓練を受け、「全集中・常中」を会得した後、禰󠄀豆子、善逸、伊之助とともに、煉󠄁獄と合流し新しい任務にあたるため“無限列車”へ乗り込む。",
                    clicked:false,
                    unclicked:false
                },
                {
                    name:"竈門禰󠄀豆子",
                    cv:"鬼頭明里",
                    text:"鬼になってしまった炭治郎の妹。鬼となりながらも、鱗滝による暗示と自分の意志で人を襲わない。日中は日差しをさけるため、炭治郎が背負う木箱に入っている。眠りにつくことで体力を回復する。",
                    clicked:false,
                    unclicked:false
                },
                {
                    name:"我妻善逸",
                    cv:"下野紘",
                    text:"炭治郎の同期の鬼殺隊剣士。「雷の呼吸」の使い手。極度の恐怖状態に陥ると失神し覚醒する。女の子が大好きで、禰󠄀豆子にもぞっこん。",
                    clicked:false,
                    unclicked:false
                },
                {
                    name:"嘴平伊之助",
                    cv:"松岡禎丞",
                    text:"炭治郎の同期となる、猪突猛進かつ好戦的な鬼殺隊の剣士。「獣の呼吸」を使い、刃こぼれした日輪刀を二刀もち豪快に戦う。",
                    clicked:false,
                    unclicked:false
                },
                {
                    name:"煉󠄁獄杏寿郎",
                    cv:"日野聡",
                    text:"鬼殺隊の中でも最高位である”柱”のひとり。炎柱。「炎の呼吸」を使い、鬼をせん滅する。明朗快活ではっきりとした物言いをする。柱合会議後、短期間のうちに40人以上もの人が行方不明になっているという“無限列車”の調査に赴くことに。",
                    clicked:false,
                    unclicked:false
                },
                {
                    name:"魘夢",
                    cv:"平川大輔",
                    text:"鬼舞辻無惨配下である“十二鬼月”のひとり。他人の不幸や苦しみを見ることを好む、歪んだ嗜好を持つ。下弦の鬼の粛清時、鬼舞辻無惨に気に入られたため、唯一生き残った。那田蜘蛛山で炭治郎たちが苦戦を強いられた下弦の伍・累よりも序列の高い下弦の壱であり、鬼舞辻無惨からも血を分け与えられている。",
                    clicked:false,
                    unclicked:false
                },
                {
                    name:"猗窩座",
                    cv:"石田彰",
                    text:"凄まじい力を持つ十二鬼月・上弦の参。練り上げられた武と共に、強者に対しての敬意を持つ。",
                    clicked:false,
                    unclicked:false
                },
            ]
        }
    },

    mounted(){
        var scrollreveal_bottom_config = {
            delay: 1000,
            distance: '200px',
            duration: 2000,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 0,
            opacity: 0,
            origin: 'bottom',
            rotate: {
                x: 0,
                y: 0,
                z: 0,
            },
            scale: 1,
            cleanup: false,
            container: document.documentElement,
            desktop: true,
            mobile: true,
            reset: true,
            useDelay: 'always',
            viewFactor: 0.0,
            viewOffset: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            afterReset: function (el) {},
            afterReveal: function (el) {},
            beforeReset: function (el) {},
            beforeReveal: function (el) {},
        };
        var scrollreveal_top_config = {
            delay: 1000,
            distance: '200px',
            duration: 2000,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 0,
            opacity: 0,
            origin: 'top',
            rotate: {
                x: 0,
                y: 0,
                z: 0,
            },
            scale: 1,
            cleanup: false,
            container: document.documentElement,
            desktop: true,
            mobile: true,
            reset: true,
            useDelay: 'always',
            viewFactor: 0.0,
            viewOffset: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            afterReset: function (el) {},
            afterReveal: function (el) {},
            beforeReset: function (el) {},
            beforeReveal: function (el) {},
        };

        this.scrollReveal.reveal('.scrollreveal_top', scrollreveal_top_config);
        this.scrollReveal.reveal('.scrollreveal_bottom', scrollreveal_bottom_config);
    },

    methods:{
        handleClicked(index){
            if(this.dataList[index].clicked == false ){
                this.dataList.forEach((item)=>{
                    item.unclicked = !item.unclicked;
                });
                this.dataList[index].clicked = !this.dataList[index].clicked;
                this.dataList[index].unclicked = !this.dataList[index].unclicked;
            }else{
                this.dataList.forEach((item)=>{
                    item.unclicked = false;
                    item.clicked = false;
                });
            }
        }
    }
}
</script>
<style scoped>
.character_box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/character_BG.png");
    background-size: cover;
    background-position: center center;
    filter: brightness(1.4);
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    position: relative;
}

.character_wrapper {
    display: flex;
    width: 40rem;
    height: 16rem;
}

.character {
    flex-grow: 1;
    border-right: 2px solid transparent;
    border-left: 2px solid transparent;
    border-image-source: linear-gradient(rgba(0, 0, 0, 0) 20%,rgb(11, 255, 194) 60%  ,rgba(0, 0, 0, 0) 80%);
    border-image-slice: 1;
    border-image-repeat: stretch;
    opacity: 60%;
    cursor: pointer;
    transition: flex-grow 1s ease-in-out;
    position: relative;
}

.character_clicked {
    opacity: 1;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}

.character_unclicked {
    flex-grow: 0;
    border: 0;
}

.character:hover {
    opacity: 1;
}

.character_staff {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    overflow: hidden;
}

.character_name {
    opacity: 0;
    transform: translateX(200px);
    background-color: rgba(0, 0, 0, 0.8);
    padding: 5px;
}

.character_clicked .character_name {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 1s linear 1s,transform 1s linear 1s;
}

.character_cv {
    opacity: 0;
    transform: translateX(200px);
    background-color: rgba(0, 0, 0, 0.8);
    padding: 5px;
}

.character_clicked .character_cv {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 1s linear 1.2s,transform 1s linear 1.2s;
}

.character_text {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4rem;
    display: grid;
    place-items: center;
    font-size: .5rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    font-family: "Noto Serif JP", serif, "游明朝", YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
    overflow: hidden;
}

.character_text p {
    margin: 20px;
    opacity: 0;
    transform: translateY(200px);
}

.character_clicked .character_text {
    width: 100%;
    transition: width 1s ease-in-out 1.4s;
}

.character_clicked .character_text p {
    opacity: 1;
    transform: translateY(0);
    transition: transform 1s ease-in-out 2.4s,opacity 2s ease-in-out 2.4s;
}

.character_img {
    width: 100%;
    height: 100%; 
}

.character:nth-child(1) .character_img{
    background-image: url("../../assets/character1.jpg");
    background-size: cover;
    background-position: center 55%;
}

.character:nth-child(2) .character_img{
    background-image: url("../../assets/character2.jpg");
    background-size: cover;
    background-position: 35% center;
}

.character:nth-child(3) .character_img{
    background-image: url("../../assets/character3.jpg");
    background-size: cover;
    background-position: center 30%;
}

.character:nth-child(4) .character_img{
    background-image: url("../../assets/character4.jpg");
    background-size: cover;
    background-position: 35% 45%;
}

.character:nth-child(5) .character_img{
    background-image: url("../../assets/character5.png");
    background-size: cover;
    background-position: center 40%;
}

.character:nth-child(6) .character_img{
    background-image: url("../../assets/character6.jpg");
    background-size: cover;
    background-position: center 0;
}

.character:nth-child(7) .character_img{
    background-image: url("../../assets/character7.jpg");
    background-size: cover;
    background-position: center center;
}
</style>