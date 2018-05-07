'use strict';

import '../_sass/main.scss';

const requireAll = (r) => {
    r.keys().forEach(r);
};

requireAll(require.context('images/', true, /\.(png|jpg|jpeg|gif)(\?.*$|$)/));

import Vue from 'vue';
import navigation from './components/nav.vue';
import foot from './components/foot.vue';
import icon from './components/icon.vue';
import trailers from './components/trailers.vue';

Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
    el: '#app',
    components: {
        navigation,
        foot,
        icon,
        trailers
    }
});
