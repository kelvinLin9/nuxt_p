import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(ui)

app.mount('#app')
