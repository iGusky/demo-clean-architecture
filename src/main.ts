import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './UI/App.vue'
import router from './UI/config/router'

import './UI/views/assets/main.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')