<template>
    <Layout>
        <div class="container">
            <div class="row">
                <div class="masonry">
                    <div
                        class="masonry-item"
                        v-for="(single, i) in singles"
                        :key="i"
                    >
                        <g-link
                            class="masonry-item__link"
                            :to="single.node.path"
                        >
                        </g-link>
                        <g-image
                            class="masonry-item__image"
                            :src="single.node.image"
                        />

                        <h1 class="masonry-item__image-heading">
                            {{ single.node.title }}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
  query Singles {
    single: allSingle {
      edges {
        node {
            path
            image
            title
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
    components: {},
    data() {
        return {
            singles: [],
        };
    },
    mounted() {
        this.singles = this.$page.single.edges;
    },

    methods: {},
};
</script>

<style lang="scss">
</style>
