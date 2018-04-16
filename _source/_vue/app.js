'use strict';

import '../_sass/main.scss';

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('images/', true, /\.(png|jpg|jpeg|gif)(\?.*$|$)/));

import Vue from 'vue';
import foot from './components/foot.vue';
import icon from './components/icon.vue';

Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
    el: '#app',
    components: {
        foot,
        icon
    }
});
