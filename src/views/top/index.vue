<template lang="">
    <div>
        <header>   
            <div class="header_nav">
                <ul>
                    <li><a href="#news">NEWS</a></li>
                    <li><a href="#staff">STAFF</a></li>
                    <li><a href="#story">STORY</a></li>
                    <li><a href="#character">CHARACTER</a></li>
                    <li><a href="#trailer">TRAILER</a></li>
                    <li><a href="#music">MUSIC</a></li>
                    <li><a href="#spec">SPEC</a></li>
                </ul>
            </div>
        </header>
        <main>
            <div class="top_box">
                作業中
                <scrollButton Anchor="#news"/>
            </div>
            <news id="news"/>
            <staff id="staff"/>
            <story id="story"/>
            <character id="character"/>
            <trailer id="trailer"/>
            <!-- <music id="music"/>
            <spec id="spec"/> -->
        </main>
    </div>
</template>
<script>

import news from '@/views/news'
import staff from '@/views/staff'
import story from '@/views/story'
import character from '@/views/character'
import trailer from '@/views/trailer'
import music from '@/views/music' 
import spec from '@/views/spec' 

export default {
    name: 'top',

    components:{
        news,
        staff,
        story,
        character,
        trailer,
        music,
        spec
    },

    mounted(){
        var bOnce = true;
        window.onwheel = (e)=>{            
            var timeout;
            if(bOnce){
                bOnce = false;
                clearTimeout(timeout);
                if(e.wheelDelta > 0){
                    window.scrollBy(0, -window.innerHeight);
                    timeout = setTimeout(()=>{
                        bOnce = true;
                    },500)                
                }
                if(e.wheelDelta < 0){       
                    window.scrollBy(0, window.innerHeight);         
                    timeout = setTimeout(()=>{
                        bOnce = true;
                    },500)
                }
            }
        }
        const _this = this;
        window.onresize = ()=>{
            return (()=>{
                window.
            })
        }
    },

    /* watch:{
        'window.innerHeight':function(){
            console.log(1);
        }
    } */
}    
</script>
<style lang="scss" scoped>
    header {
        width: 100vw;
        height: 1.5rem;
        position:fixed;
        top: 0;
        left:0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        .header_nav {
            width: 100%;
            height: 100%;
            ul {
                margin-left: 20%;
                width: 80%;
                height: 100%;
                display: flex;
                color: white;
                li {
                    flex-grow: 1;
                    cursor: pointer;
                    display:grid;
                    place-items: center;
                }
                a {
                    color: white;
                }
            }
        }        
    }

    @media screen and (min-width:600px) {
        header {
            font-size: 10px;
        }

        header ul {
            margin-left: 10%;
            width: 90%;
        }
    }

    @media screen and (min-width:1200px) {
        header {
            font-size: calc(26px + (1200vw - 14400px)/720);
        }

        header ul {
            margin-left: 20%;
            width: 80%;
        }
    }

    main {
        width: 100%;
        min-width: 1200px;
        .top_box {
            display:grid;
            place-items: center;
            color: black;
            width: 100%;
            height: 100vh;
            position: relative;
            .scroll {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.5rem;
                cursor: pointer;
                color: white;
                text-shadow: 1px 1px 1px black;
                &:hover{
                    font-size: 0.75rem;
                    transition:font-size 0.5s;
                }
            }


        }
    }
</style>