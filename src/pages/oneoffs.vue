<template>
    <Layout>
        <div class="container">
            <div class="row">
                <h1>One-offs</h1>
                <ul class="oneoffs">
                    <li
                        class="oneoff"
                        v-for="(OneOff, i) in $page.OneOff.edges"
                        :key="i"
                    >
                        <g-link :to="OneOff.node.path">
                            <g-image
                                class="oneoff__image"
                                :src="OneOff.node.image"
                            />
                        </g-link>
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
</template>

<page-query>
  query OneOffs {
    OneOff: allOneOff {
      edges {
        node {
            path
            image
        }
      }
    }
  }
</page-query>

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
