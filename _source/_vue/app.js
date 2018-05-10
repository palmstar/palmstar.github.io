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

Vue.directive('featuredKeypress', (el, binding) => {
    const total = binding.value.total;
    let current = binding.value.active;

    (function arrowKeypress() {
        window.addEventListener('keyup', function pressEvent(evt) {
            if (evt.keyCode === 37) {
                current = current - 1 < 1 ? total : current - 1;
            }

            if (evt.keyCode === 39) {
                current = current + 1 > total ? 1 : current + 1;
            }

            if (evt.keyCode === 37 || evt.keyCode === 39) {
                document.getElementById(`featured${current}`).checked = true;
            }
        });
    })();
});

new Vue({
    el: '#app',
    components: {
        navigation,
        foot,
        icon,
        trailers
    }
});
