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
import gallery from './components/gallery.vue';

Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
    el: '#app',
    components: {
        navigation,
        foot,
        icon,
        trailers,
        gallery
    },
    data() {
        return {
            navHeight: 120,
            firstScroll: true,
            ticking: false,
            distanceFromTop: window.pageYOffset,
            lastDistanceFromTop: window.pageYOffset,
            scrollingUp: null,
            scrollingDown: null
        };
    },
    created() {
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
        const self = this;

        setTimeout(function initBindScrolling() {
            if (self.distanceFromTop === 0) {
                self.onScroll();
            }

            window.addEventListener('scroll', function bindScrolling() {
                if (!self.ticking) {

                    window.requestAnimationFrame(function rafScroll() {
                        self.onScroll();
                        self.ticking = false;
                    });

                    self.ticking = true;

                }
            });
        }, 100);
    },
    destroyed() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        setDynamicVariables() {
            this.distanceFromTop = window.pageYOffset;
            this.screenBottomPos = this.distanceFromTop + window.innerHeight;
        },
        onScroll() {
            this.setDynamicVariables();

            if (this.firstScroll) {
                this.firstScroll = false;
                return;
            }

            if (this.scrollingUp) {
                this.$el.classList.remove('scrolling-down');

                if (this.distanceFromTop >= this.navHeight * 2) {
                    this.$el.classList.add('scrolling-up');
                }
                else {
                    if (this.distanceFromTop === 0) {
                        this.$el.classList.remove('scrolling-up');
                    }
                }
            }
            else {
                if (this.distanceFromTop >= this.navHeight) {
                    this.$el.classList.remove('scrolling-up');
                    this.$el.classList.add('scrolling-down');
                }
            }

            this.handleAffix();
        },
        handleAffix() {
            this.setScrollingDirection();
            this.lastDistanceFromTop = this.distanceFromTop;
        },
        setScrollingDirection() {
            if (this.distanceFromTop > this.lastDistanceFromTop) {
                this.scrollingDown = true;
                this.scrollingUp = false;
            }
            else {
                this.scrollingUp = true;
                this.scrollingDown = false;
            }
        }
    }
});
