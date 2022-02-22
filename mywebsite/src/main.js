import {
    createApp
} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/font/font.css'
import 'animate.css';
import 'hover.css'
import VueParticles from 'vue-particles'

import {
    setupRouter
} from './router/index'
import {
    setupStore
} from './store/index'

setup()

function setup() {
    const app = createApp(App)
    setupRouter(app)
    setupStore(app)
    app.use(VueParticles)
    app.use(ElementPlus)
    app.mount('#app')
}