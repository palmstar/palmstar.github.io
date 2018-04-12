<template>
    <footer>
        <div><icon name="logo-mark-black"></icon></div>
        <span>&copy; 2018 PalmStar Media Capital, LLC. all rights reserved</span>
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
            flex: 0 1 auto;

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
        }
    }
</style>
