import './index.js';
import '~/assets/css/maincss.css';

/*import '~/assets/scss/style.scss';*/
import DefaultLayout from '~/layouts/Default.vue'
export default function (Vue,{ head, router, isServer } ) {
  Vue.component('Layout', DefaultLayout)
}
