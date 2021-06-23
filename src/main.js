/* 入口文件 管理模块 */
import { createApp } from 'vue' //ES6 模块导入方式      var {createApp} = require('vue')
import App from './App.vue'
import router from './router'
import store from './store'

import VideoPlayer from 'vue-video-player/src'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'


import title from '@/components/title'
import scrollButton from '@/components/scrollButton'

createApp(App)
    .use(store)
    .use(router)
    .use(VideoPlayer)
    .component('v-title',title)
    .component('scrollButton',scrollButton)
        .mount('#app')
