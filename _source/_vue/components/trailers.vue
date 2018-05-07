<template>
    <div v-if="project.trailers && project.trailers.length" class="trailer">
        <div class="videoWrapper">
            <iframe id="palmStarPlayer" :src="project.trailers[0].trailer" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div v-if="project.trailers.length > 1" class="thumbs">
            <ul>
                <li v-for="(item, index) in project.trailers" :key="item.id" :class="{ 'active': activeIndex == index }">
                    <button type="button" @click="selectTrailer(item, index)">
                        <img :src="item.thumbnail" />
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Icon from './icon.vue';
    import axios from 'axios';

    export default {
        name: 'trailers',
        components: {
            Icon
        },
        props: {
            projectSlug: {
                type: String,
                default: 'collateral-beauty',
                required: true
            }
        },
        data() {
            return {
                project: [],
                errors: [],
                activeIndex: 0
            };
        },
        created() {
            const self = this;
            axios.get(`//0.0.0.0:4000/api/v1/projects/${self.projectSlug}/index.json`)
                .then((response) => {
                    self.project = response.data.attributes;
                })
                .catch((e) => {
                    self.errors.push(e);
                });
        },
        methods: {
            selectTrailer (item, index) {
                this.activeIndex = index;
                const playerFrame = document.getElementById('palmStarPlayer');
                playerFrame.src = item.trailer;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .trailer {
        margin: 0 auto;
        width: 80%;

        @include breakpoint (small, max) {
            width: 90%;
        }

        .videoWrapper {
            height: 0;
            padding-bottom: 56.25%; /* 16:9 */
            padding-top: 25px;
            position: relative;

            iframe {
                @include position (absolute, 0, 0, 0, 0);
                height: 100%;
                width: 100%;
            }
        }

        .thumbs {
            ul {
                /* stylelint-disable declaration-block-no-redundant-longhand-properties */
                align-content: stretch;
                align-items: stretch;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                list-style: none;
                padding: 2px 0;
                text-align: center;
                /* stylelint-enable */
                li {
                    display: inline-block;
                    margin: 2px;
                    width: calc(25% - 4px);

                    @include breakpoint (large, max) {
                        width: calc(33.3% - 4px);
                    }

                    @include breakpoint (medium, max) {
                        width: calc(50% - 4px);
                    }

                    button {
                        background-color: transparent;
                        border: solid 3px $alto;
                        cursor: pointer;
                        display: block;
                        padding: 3px;
                        position: relative;

                        img {
                            display: block;
                            width: 100%;
                        }

                        .meta {
                            @include opacity (0);
                            @include position (absolute, 0, 0, 0, 0);
                            align-items: center;
                            background-color: rgba($black, .85);
                            display: flex;
                            justify-content: center;
                            padding: 0 15px;
                            transition: opacity .3s ease-out;

                            label {
                                color: $white;
                                font-size: 16px;
                                line-height: 20px;
                            }
                        }

                        &:hover {
                            .meta {
                                @include opacity (1);
                            }
                        }
                    }

                    &.active {
                        button {
                            border-color: $palmstar-blue;
                        }
                    }
                }
            }
        }
    }
</style>
