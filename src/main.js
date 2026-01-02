import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/GlobalStyle.css';

import store from "@/state/store.js";
import i18n, { setupI18nWatcher } from "@/i18n";

import { BPopover } from 'bootstrap-vue'
Vue.component('b-popover', BPopover)

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true })


Vue.config.productionTip = false

Vue.filter('cleanNum', function (value) {
	if (value == undefined) return "";
	return value.toLocaleString();
})

Vue.filter('stat', function (value) {
	if (value == undefined) return "";
	return +value.toFixed(2);
})
Vue.filter('aggressive', function (value) {
	if (value == undefined) return 0;
	if (value >= 1000 && !store.getters["settings/showFullValues"]) {
		value = Math.min(Math.floor(value / 1000), 9);
		return `>${value}k`;
	}
	return value.toLocaleString();
})

new Vue({
	store,
	i18n,
	render: h => h(App),
}).$mount('#app')

// Настраиваем синхронизацию языка между i18n и store
setupI18nWatcher(store);

store.dispatch('chrono/updateOfflineTime');
store.dispatch('research/startupRoll');
store.dispatch("cleanup");
store.dispatch("_resume");
