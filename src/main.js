import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store/index.js"
import { MotionPlugin } from '@vueuse/motion'   
import '@/main.css'
import '@/config/vee-validate/rules.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(MotionPlugin);
app.use(VueAxios, axios)

app.mount("#app");
