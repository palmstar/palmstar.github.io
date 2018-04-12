<template>
    <svg
        :viewBox="iconData.artboard ? iconData.artboard : '0 0 50 50'"
        version="1.1"
        role="img"
        v-html="iconData.svg">
    </svg>
</template>

<script>
    import {ICON_SHAPES} from '../constants/icon-shapes.js';

    export default {
        name: 'icon',
        props: {
          name: {
            type: String,
            default: 'logo-mark-black',
            required: true
          }
        },
        data() {
            return {
                loaded: false
            };
        },
        computed: {
            iconData() {
                if (this.name) {
                    return ICON_SHAPES[this.name];
                }
                return null;
            }
        }
    };
</script>

<style lang="scss" scoped>
    svg {
        -moz-box-sizing: content-box !important;
        -webkit-box-sizing: content-box !important;
        box-sizing: content-box !important;
        display: block;
        fill: currentColor;
        height: 100%;
        line-height: 1;
        overflow: visible;
        padding: 0;
        width: 100%;

        &:not(:root) {
            overflow: visible;
        }
    }
</style>
