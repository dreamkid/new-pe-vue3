import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './common.css'
import './assets/lib/amfe-fkexible.js'
const app = createApp(App)

import GlobalComponent from './components/main.js'
app.use(GlobalComponent)

app.use(router)
app.mount('#app')