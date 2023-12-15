import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style/main.css'
import App from './App.vue'
import 'uno.css'
import '@unocss/reset/tailwind-compat.css'

const pinia = createPinia();
createApp(App).use(pinia).mount('#app')
