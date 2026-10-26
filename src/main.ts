import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/providers/pinia'
import router from '@/config/router'
import '@/assets/scss/main.scss'

createApp(App).use(pinia).use(router).mount('#app')
