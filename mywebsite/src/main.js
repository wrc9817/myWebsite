import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {
    setupRouter
} from './router/index'
import {
    setupStore
} from './store/index'

setup()
function setup(){
    const app = createApp(App)
    setupRouter(app)
    setupStore(app)
    app.use(ElementPlus)

    app.mount('#app')
}