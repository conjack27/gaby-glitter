<template>
    <Layout>
        <div class="container">
            <div class="row">
                <h1>One-offs</h1>
                <ul class="oneoffs">
                    <!-- <li
                        class="oneoff"
                        v-for="(oneOff, i) in $page.oneOff.edges"
                        :key="i"
                    >
                        <g-link :to="oneOff.node.path">
                            <g-image
                                class="oneoff__image"
                                :src="oneOff.node.image"
                            />
                        </g-link>
                    </li> -->
                </ul>
            </div>
        </div>
    </Layout>
</template>



<script>
export default {
    metaInfo: {
        title: "One-Offs",
    },
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss">
.oneoffs {
    list-style-type: none;
}

.oneoff {
}

.oneoff__image {
    width: 100%;
    height: auto;
}
</style>
