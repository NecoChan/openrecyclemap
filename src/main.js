import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'

Vue.use(Vuetify);

Vue.config.productionTip = false;

import 'vuetify/dist/vuetify.min.css'

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');