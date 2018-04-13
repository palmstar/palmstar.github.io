<template>
    <footer>
        <div><icon name="logo-mark-black"></icon></div>
        <span>&copy; 2018 PalmStar Media Capital, LLC.<ins>all rights reserved</ins></span>
        <a href="http://www.nationallampoon.com/" class="nli-logo"></a>
    </footer>
</template>

<script>
    import Icon from './icon.vue';
    export default {
        name: 'foot',
        components: {
            Icon
        }
    };
</script>

<style lang="scss" scoped>
    footer {
        border-top: solid 1px $alto;
        align-content: stretch;
        align-items: flex-start;
        color: $gray-headline;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        flex-wrap: nowrap;
        height: 60px;
        justify-content: flex-start;
        line-height: 60px;
        margin: 0 50px;
        overflow: hidden;
        padding: 0 25px;

        div {
            align-self: auto;
            height: 100%;
            order: 0;
            flex: 0 1 60px;

            svg {
                height: 40px;
                margin: 10px 0 0;
            }
        }

        span {
            align-self: auto;
            display: inline-block;
            flex: 1 1 auto;
            height: 100%;
            margin: 0;
            order: 0;
            overflow: hidden;
            padding: 0 0 0 5px;
            white-space: nowrap;

            ins {
                display: inline;
                text-decoration: none;
            }
        }

        .nli-logo {
            @include image-insert-icon ('/images/nli-logo.png', 40px, 155px, 0 0);
            background-size: cover;
            display: inline-block;
            margin: 10px 0 0;
        }

        @include breakpoint (medium, max) {
            span {
                font-size: 12px;
                line-height: 1.4;
                margin: 12px 0 0;

                ins {
                    display: block;
                }
            }
        }

        @include breakpoint (small, max) {
            .nli-logo {
                height: 26px;
                margin-top: 18px;
                width: 100px;
            }
        }

        @include breakpoint (extra-small, max) {
            padding: 0 10px;

            div,
            .nli-logo {
                display: none;
            }
        }
    }
</style>
