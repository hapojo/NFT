import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'

import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App).use(router).mount('#app')
app.use(BootstrapVue3)

import "bootstrap/dist/js/bootstrap.js"