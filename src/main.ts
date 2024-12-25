import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BepPlus from 'bep-plus';
import 'bep-plus/dist/theme-chalk/index.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BepPlus, { locale: 'zhCn' });

app.mount('#app')
