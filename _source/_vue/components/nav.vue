<template>
    <nav role="banner">
        <ul role="navigation">
            <li :class="{ 'active': (activePage === 'about') }">
                <a href="/about" title="About">About</a>
            </li>
            <li :class="{ 'active': (activePage === 'home') }" class="logo">
                <a href="/" title="National Lampoon Homepage" class="home-link">
                    <icon name="logo-mark"></icon>
                </a>
            </li>
            <li :class="{ 'active': (activePage === 'contact') }">
                <a href="/contact" title="Press">Contact</a>
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
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            text-align: center;

            li {
                display: inline-block;
                vertical-align: middle;

                a {
                    color: $nli-nav;
                    display: block;
                    font-size: 15px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    line-height: 150px;
                    padding: 0 25px;
                    text-decoration: none;
                    text-transform: uppercase;

                    svg {
                        height: 85px;
                    }

                    &:hover {
                        color: $nli-nav-yellow;
                    }
                }

                &.logo {
                    a {
                        color: $white;
                    }
                }
            }
        }
    }
</style>
