<template>
    <nav :class="{ 'home-bleed': (activePage === 'home') }">
        <a href="/" title="PalmStar Homepage" class="home-link">
            <icon name="logo-white"></icon>
        </a>
        <ul>
            <li :class="{ 'active': (activePage === 'about') }">
                <a href="/about" title="About">About</a>
            </li>
            <li :class="{ 'active': (activePage === 'team') }">
                <a href="/team" title="Team">Team</a>
            </li>
            <li :class="{ 'active': (activePage === 'projects') }">
                <a href="/projects" title="Projects">Projects</a>
            </li>
            <li :class="{ 'active': (activePage === 'press') }">
                <a href="/press" title="Press">Press</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Icon from './icon.vue';

    export default {
        name: 'navigation',
        components: {
            Icon
        },
        props: {
            activePage: {
                type: String,
                default: 'home',
                required: true
            }
        }
    };
</script>

<style lang="scss" scoped>
    nav {
        /* stylelint-disable declaration-block-no-redundant-longhand-properties */
        align-content: stretch;
        align-items: flex-start;
        background-color: $header-background;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        flex-wrap: nowrap;
        height: 120px;
        justify-content: flex-start;
        line-height: 120px;
        overflow: hidden;
        text-align: center;
        z-index: 3;
        /* stylelint-enable */
        &.home-bleed {
            @include position (absolute, 0, 0, auto, 0);
            background: linear-gradient(to bottom, rgba(0, 0, 0, .85) 0%, rgba(0, 0, 0, .25) 75%, rgba(0, 0, 0, 0) 100%);

            ul {
                li {
                    a {
                        color: $white;
                        text-shadow: 1px 1px 0 rgba(0, 0, 0, .8);
                    }
                }
            }
        }

        .home-link {
            align-self: auto;
            flex: 0 1 auto;
            height: calc(100% - 50px);
            margin: 25px 0 0 25px;
            order: 0;

            svg {
                width: auto;
            }
        }

        ul {
            align-self: auto;
            display: inline-block;
            flex: 1 1 auto;
            height: 100%;
            margin: 0;
            order: 0;
            overflow: hidden;
            padding: 0 0 0 20px;
            text-align: right;

            li {
                display: inline-block;
                font-weight: normal;
                margin: 0;

                a {
                    color: rgba($white, .75);
                    display: block;
                    font-size: 12px;
                    letter-spacing: 5px;
                    padding: 0 30px;
                    position: relative;
                    text-decoration: none;
                    text-transform: uppercase;

                    &::after {
                        @include position (absolute, auto, 25px, 40px, 20px);
                        @include transform (scaleX(0));
                        border: solid 2px $white;
                        border-color: transparent transparent $white;
                        content: '';
                        display: block;
                        ms-transition: -webkit-transform .3s ease-out, border-color .3s ease-out;
                        -webkit-transition: -webkit-transform .3s ease-out, border-color .3s ease-out;
                        transition: transform .2s ease-out, border-color .3s ease-out;
                    }

                    &:hover {
                        color: $white;

                        &::after {
                            @include transform (scaleX(1));
                        }
                    }
                }

                &.active {
                    a {
                        color: $white;

                        &::after {
                            @include transform (scaleX(1));
                        }
                    }
                }
            }
        }

        @include breakpoint (large, max) {
            ul {
                li {
                    a {
                        letter-spacing: 3px;
                        padding: 0 18px;

                        &::after {
                            left: 10px;
                            right: 15px;
                        }
                    }
                }
            }
        }

        @include breakpoint (medium, max) {
            flex-direction: column;

            .home-link {
                height: 50%;
                margin: 10px 0 0 35px;
            }

            ul {
                height: 50%;
                line-height: initial;
                padding: 0;
                text-align: left;
                width: 100%;

                li {
                    line-height: initial;

                    a {
                        padding: 15px 35px;

                        &::after {
                            bottom: 5px;
                        }
                    }
                }
            }
        }

        @include breakpoint (small, max) {
            .home-link {
                margin: 10px 0 0 20px;
            }

            ul {
                li {
                    a {
                        padding: 15px 18px;
                    }
                }
            }
        }

        @include breakpoint (extra-small, max) {
            height: 260px;

            .home-link {
                height: 60px;
                margin: 15px auto 0;
            }

            ul {
                li {
                    display: block;

                    a {
                        padding: 15px 18px 15px 30px;

                        &:hover {
                            color: $white;

                            &::after {
                                @include transform (scaleY(1));
                            }
                        }

                        &::after {
                            @include transform (scaleY(0));
                            border-color: transparent transparent transparent $white;
                            bottom: 5px;
                            left: 15px;
                            right: auto;
                            top: 5px;
                        }
                    }
                }
            }
        }
    }
</style>
