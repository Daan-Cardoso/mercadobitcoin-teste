import { createApp } from 'vue'
import mask from './directives/mask'
import App from './App.vue'
import './assets/scss/reset.scss'

createApp(App)
.directive('mask', mask)
.mount('#app')
