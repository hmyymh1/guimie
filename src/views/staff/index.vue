<template lang="">
    <div class="staff_box">
        <v-title title="STAFF"/>
        <div class="staff">
            <p>
                <span class="staff_title">原作</span><span class="staff_name">吾峠呼世晴</span><!--
                --><span class="staff_title">監督</span><span class="staff_name">外崎春雄</span><!--
                --><span class="staff_title">キャラクターデザイン・総作画監督</span><span class="staff_name">松島晃</span><!--
                --><span class="staff_title">脚本制作・アニメーション制作</span><span class="staff_name">ufotable</span>
            </p>
            <p>
                <span class="staff_title">サブキャラクターデザイン</span><span class="staff_name">佐藤美幸・梶山庸子・菊池美花</span><!--
                --><span class="staff_title">プロップデザイン</span><span class="staff_name">小山将治</span><!--
                --><span class="staff_title">コンセプトアート</span><span class="staff_name">衛藤功二・矢中勝・樺澤侑里</span>
            </p>
            <p>
                <span class="staff_title">撮影監督</span><span class="staff_name">寺尾優一</span><!--
                --><span class="staff_title">3D監督</span><span class="staff_name">西脇一樹</span><!--
                --><span class="staff_title">色彩設計</span><span class="staff_name">大前祐子</span><!--
                --><span class="staff_title">編集</span><span class="staff_name">神野学</span>
            </p>
            <p>
                <span class="staff_title">音楽</span><span class="staff_name">梶浦由記・椎名豪</span><!--
                --><span class="staff_title">主題歌</span><span class="staff_name">LiSA「炎」</span><!--
                --><span class="staff_title">配給</span><span class="staff_name">東宝・アニプレックス</span>
            </p>
        </div>       
        <scrollButton Anchor="#story"/>
    </div>
</template>
<script>
export default {
    name: "staff"
}
</script>
<style scoped>
    .staff_box {
        background-image: url("../../assets/staff_BG.jpg");
        display:grid;
        place-items: center;
        width: 100%;
        height: 100vh;
        position: relative;
    }

    .staff {
        width: 80%;
        display:grid;
        place-items: center;
    }

    .staff p {
        margin: 10px;
    }

    .staff_title {
        font-size: .3rem;
        margin-right: 10px;
        font-family: "Sawarabi Mincho";
        vertical-align: middle;
    }

    .staff_name {
        font-size: .6rem;
        margin-right: 20px;
        font-family: "Sawarabi Mincho";
        vertical-align : middle;
    }
</style>