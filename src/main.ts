import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueApexCharts from 'vue3-apexcharts'
import VueFeather from 'vue-feather'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import SmartTable from 'vuejs-smart-table'

createApp(App).component("vue-feather", VueFeather).use(store).use(SmartTable).use(router).use(VueApexCharts).use(VueSweetalert2).mount('#app')
