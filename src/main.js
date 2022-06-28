import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './common.css'
import './assets/lib/amfe-fkexible.js'
const app = createApp(App)
app.use(router)
app.mount('#app')