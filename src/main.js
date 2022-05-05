import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import "./assets/css/tailwind.css";

createApp(App).use(router).mount('#app')
