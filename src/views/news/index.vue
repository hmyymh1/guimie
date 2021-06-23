<template lang="">
    <div class="news_box">
        <v-title title="NEWS" />
        <div class="news_wrapper">
            <div class="news">
                <h1>News</h1>
                <div class="news_item_box">
                    <div class="news_item">
                        <p class="news_date">2020.11.13</p>
                        <p class="news_title"> TVアニメ「鬼滅の刃」オーケストラコンサート ～鬼滅の奏～ 【重要なお知らせ】 広島・大阪・札幌・仙台・福岡・名古屋公演チケット払い戻し再受付について</p>
                    </div>
                    <div class="news_item">
                        <p class="news_date">2020.11.13</p>
                        <p class="news_title"> 『グランブルーファンタジー』×『鬼滅の刃』コラボイベントが開催決定！</p>
                    </div>
                    <div class="news_item">
                        <p class="news_date">2020.11.13</p>
                        <p class="news_title">ホテルモントレにてコラボルームの開催が決定！</p>
                    </div>
                    <div class="news_item">
                        <p class="news_date">2020.11.09</p>
                        <p class="news_title">【鬼滅の奏】東京公演 時間差入場について</p>
                    </div>
                    <div class="news_item">
                        <p class="news_date">2020.11.09</p>
                        <p class="news_title"> 全集中展　新たに＜香川＞で開催決定！</p>
                    </div>
                    <div class="news_item">
                        <p class="news_date">2020.11.09</p>
                        <p class="news_title"> 全集中展　兵庫会場の開催概要を公開！</p>
                    </div>
                </div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
            <div class="twitter">
                <h1>Twitter</h1>
                <div class="timeline_box">
                    <a class="twitter-timeline" data-lang="ja" data-theme="dark" href="https://twitter.com/kimetsu_off?ref_src=twsrc%5Etfw">Tweets by kimetsu_off</a>                        
                </div>
            </div>
        </div>
        <scrollButton Anchor="#staff"/>
    </div>
</template>

<script>


export default {
    name: "news",
}

</script>
<style scoped>
    .news_box {
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url("../../assets/news_BG.png");
    background-size: cover;
    background-position: center center;
}

.news_wrapper {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 37rem;
    height: 12.5rem;
    display: flex;
}

.news {
    width: 50%;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .4rem;
    padding: 20px;
    background-color: black;
    color: white;
    border: 1px solid black;
    
}

.news_item_box {
    height: 80%;
    overflow-y: auto;
    border-radius: 15px;
}

.news_item {
    margin-top: 5px;
    padding: 15px;
    border-bottom: 1px dashed white;
    background-color: #292F33;
    cursor: pointer;
}

.news_item:hover {
    background-color: #212629;
}

.news_date {
    margin-bottom: 5px;
}

.news ul {
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
}

.news ul li {
    margin: 10px;
    cursor: pointer;
}

.news ul li:hover {
    text-decoration: underline;
}

.twitter {
    width: 50%;
    margin-left: 30px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .4rem;
    padding: 20px 20px;
    background-color: black;
    color: white;
}

.timeline_box {
    width: 100%;
    overflow-y: auto;
}

</style>