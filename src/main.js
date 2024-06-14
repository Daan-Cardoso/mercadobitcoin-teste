import { createApp } from 'vue'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'
import './assets/scss/reset.scss'

createApp(App)
.use(VueTheMask)
.mount('#app')
