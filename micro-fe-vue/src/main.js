import Vue from 'vue'
import App from './App.vue'

///// web components 
import wrap from '@vue/web-component-wrapper';
//import VueWebComponent from './components/VueWebComponent';
import OrderForm from './components/OrderForm';

const OrderFormElement = wrap(Vue, OrderForm);
//const CustomElement = wrap(Vue, VueWebComponent);

//window.customElements.define('my-custom-element', CustomElement);
window.customElements.define('order-form', OrderFormElement);

/// end 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
