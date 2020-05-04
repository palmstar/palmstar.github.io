<template>
    <div class="gallery">
        <vue-glide
            :bullet="true"
            :perView="1"
            focusAt="center"
            :gap="0"
            :bound="true"
            :startAt="0"
            type="carousel"
            v-model="active">
            <vue-glide-slide class="glide__slide-hereditary">
                <a
                    href="/projects/2018/06/08/hereditary/"
                    title="Hereditary">
                    <img
                        src="assets/images/projects/hereditary/hereditary-hero-5.jpg"
                        alt="Hereditary" />
                </a>
                <div class="meta">
                    <a
                        href="/projects/2018/06/08/hereditary/"
                        title="Hereditary">
                        <h1>Hereditary</h1>
                        <span>
                            Directed by Ari Aster
                            <small>
                                (2018)
                            </small>
                        </span>
                    </a>
                </div>
            </vue-glide-slide>
            <vue-glide-slide>
                <a
                    href="/projects/2018/07/01/the-catcher-was-a-spy/"
                    title="The Catcher Was a Spy">
                    <img
                        src="assets/images/projects/the-catcher-was-a-spy/the-catcher-was-a-spy-hero-1.jpg"
                        alt="The Catcher Was a Spy" />
                </a>
                <div class="meta">
                    <a
                        href="/projects/2018/07/01/the-catcher-was-a-spy/"
                        title="The Catcher Was a Spy">
                        <h1>The Catcher Was a Spy</h1>
                        <span>
                            Directed by Ben Lewin
                            <small>
                                (2018)
                            </small>
                        </span>
                    </a>
                </div>
            </vue-glide-slide>
            <vue-glide-slide class="glide__slide-nli">
                <a
                    href="https://www.nationallampoon.com"
                    title="National Lampoon">
                    <img
                        src="assets/images/hero/lampoon-hero.jpg"
                        alt="National Lampoon" />
                </a>
                <div class="meta">
                    <a
                        href="https://www.nationallampoon.com"
                        title="National Lampoon">
                        <h1>
                            PalmStar Acquires<br>National Lampoon
                        </h1>
                        <span>
                            June 2017
                        </span>
                    </a>
                </div>
            </vue-glide-slide>
            <vue-glide-slide class="glide__slide-collateralbeauty">
                <a
                    href="/projects/2016/12/16/collateral-beauty/"
                    title="Collateral Beauty">
                    <img
                        src="assets/images/projects/collateral-beauty/collateral-beauty-hero-2.jpg"
                        alt="Collateral Beauty" />
                </a>
                <div class="meta">
                    <a
                        href="/projects/2016/12/16/collateral-beauty/"
                        title="Collateral Beauty">
                        <h1>Collateral Beauty</h1>
                        <span>
                            Directed by David Frankel
                            <small>
                                (2016)
                            </small>
                        </span>
                    </a>
                </div>
            </vue-glide-slide>
            <vue-glide-slide class="glide__slide-singstreet">
                <a
                    href="/projects/2016/03/17/sing-street/"
                    title="Sing Street">
                    <img
                        src="/assets/images/projects/sing-street/sing-street-hero-1.jpg"
                        alt="Sing Street" />
                </a>
                <div class="meta">
                    <a
                        href="/projects/2016/03/17/sing-street/"
                        title="Sing Street">
                        <h1>Sing Street</h1>
                        <span>
                            Directed by John Carney
                            <small>
                                (2016)
                            </small>
                        </span>
                    </a>
                </div>
            </vue-glide-slide>
            <template slot="control">
                <button
                    class="glide__previous"
                    data-glide-dir="<">
                    <icon name="arrow-left"></icon>
                </button>
                <button
                    class="glide__next"
                    data-glide-dir=">">
                    <icon name="arrow-right"></icon>
                </button>
            </template>
        </vue-glide>
    </div>
</template>

<script>
    import Icon from './icon.vue';
    import {
        Glide, GlideSlide
    } from 'vue-glide-js';
    import 'vue-glide-js/dist/vue-glide.css';

    export default {
        name: 'gallery',
        components: {
            Icon,
            [Glide.name]: Glide,
            [GlideSlide.name]: GlideSlide
        },
        data () {
            return {
                active: 0 // zero-based slide
            };
        }
    };

</script>

<style lang="scss">
    .gallery {
        @include position (absolute, 0, 0, 0, 0);
        display: block;
        overflow: hidden;
        transform-style: preserve-3d;

        .glide {
            height: 100%;

            .glide__track {
                height: 100%;

                .glide__slides {
                    @include transform (translate3d(0, 0, 0));
                    @include transition-animation (transform, .5s, ease-in-out, 0ms);
                    background-color: $alto;
                    height: 100%;
                    list-style: none;
                    margin: $zero;
                    padding: $zero;
                    position: relative;
                    white-space: nowrap;
                    will-change: auto;

                    .glide__slide {
                        position: relative;

                        a {
                            display: block;
                        }

                        img {
                            &:not(.not-full) {
                                @include position (absolute, 0, 0, 0, 0);
                                display: block;
                                height: 100%;
                                object-fit: cover;
                                width: 100%;
                                z-index: $z-index-base;
                            }
                        }

                        .meta {
                            @include position (relative, 50%, auto, auto, 50%);
                            @include transform (translate3d(-50%, -50%, 0));
                            color: $white;
                            display: inline-block;
                            padding: 10px;
                            text-align: center;
                            text-shadow: 2px 2px 0 rgba(0, 0, 0, .75);
                            white-space: normal;
                            z-index: 2;

                            a {
                                color: $white;
                                display: block;
                                text-decoration: none;

                                &:hover {
                                    color: rgba($white, .65);
                                }
                            }

                            h1,
                            span {
                                font-weight: 200;
                                text-align: center;
                                text-transform: none;
                            }

                            h1 {
                                margin: 0;

                                small {
                                    font-size: 40%;
                                }

                                &::before {
                                    display: none;
                                }
                            }

                            span {
                                display: block;
                                font-weight: normal;
                            }

                            @include breakpoint (extra-small, max) {
                                top: 325px;
                            }
                        }
                    }
                }
            }

            .glide__previous,
            .glide__next {
                @include transition-animation (all, 250ms, ease-in, 0ms);
                @include position (absolute, 50%, auto, auto, auto);
                @include transform (translateY(-50%));
                background: none;
                border: $zero;
                border-radius: 50%;
                color: $white;
                cursor: pointer;
                height: 44px;
                width: 44px;
                z-index: $z-index-base-max;

                .arrow-right,
                .arrow-left {
                    @include position (absolute, 50%, auto, auto, 50%);
                    @include transform (translate3d(-50%, -50%, 0));
                }

                &:hover {
                    color: rgba($white, .5);
                }
            }
            /* stylelint-disable no-descending-specificity */
            .glide__previous {
                left: 2%;

                .arrow-left {
                    margin: 0 0 0 -4px;
                }
            }

            .glide__next {
                right: 2%;

                .arrow-right {
                    margin: 0 0 0 3px;
                }
            }
            /* stylelint-enable no-descending-specificity */
            .glide__bullets {
                @include position (absolute, auto, 0, 25px, 0);
                margin-bottom: constant(safe-area-inset-bottom);
                margin-bottom: env(safe-area-inset-bottom);
                padding: 12px 0;
                text-align: center;
                width: 100%;

                button {
                    @include transition-animation (background-color, 250ms, ease-in-out, 0ms);
                    background-color: rgba($white, .25);
                    border: $zero;
                    border-radius: 50%;
                    cursor: pointer;
                    display: inline-block;
                    height: 11px;
                    margin: 0 5px;
                    padding: $zero;
                    width: 11px;

                    &:hover {
                        background-color: $white;
                    }

                    &.glide__bullet--active {
                        background-color: $white;
                    }
                }
            }
        }
    }
</style>
