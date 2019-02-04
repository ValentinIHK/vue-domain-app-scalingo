import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from "./router"

Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.prototype.$multiwatch = function (props, watcher) {
    var iterator = function(prop) {
        this.$watch(prop, watcher);
    };
    props.forEach(iterator, this);
}

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
