<template>
    <footer>
        <div>
            <a href="/" title="PalmStar Homepage">
                <icon name="logo-mark"></icon>
            </a>
        </div>
        <span>
            &copy; 2018 PalmStar Media Capital, LLC.
            <ins>all rights reserved.</ins>
        </span>
        <a href="http://www.nationallampoon.com/" class="nli-logo" title="National Lampoon">
            <icon name="nli-logo-alt"></icon>
        </a>
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
        /* stylelint-disable declaration-block-no-redundant-longhand-properties */
        align-content: stretch;
        align-items: flex-start;
        border-top: solid 1px $alto;
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
        z-index: 3;
        /* stylelint-enable */
        &.home-bleed {
            border-top-color: $gray-headline;
            display: none;

            div {
                color: $gray-headline;
            }

            .nli-logo {
                color: lighten($gray-headline, 35%);
            }
        }

        div {
            align-self: auto;
            flex: 0 1 60px;
            height: 100%;
            order: 0;

            a {
                color: inherit;
            }

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
            color: $nli-yellow;
            display: inline-block;
            margin: 10px 0 0;
            max-height: 100%;
            width: 140px;

            svg {
                height: 60%;
            }
        }

        @include breakpoint (medium, max) {
            margin: 0 5%;
            padding: 0 5px;

            div {
                flex: 0 1 30px;
            }

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
            padding: 0 10px;

            div {
                display: none;
            }
        }

        @include breakpoint (extra-small, max) {
            &.home-bleed {
                background-color: $black;
                border-top: 0;
                color: $white;
                display: none;
                font-weight: normal;
                margin: 0;
                text-align: center;
            }

            .nli-logo {
                display: none;
            }
        }
    }
</style>
