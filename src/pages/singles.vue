<template>
    <Layout>
        <div class="container">
            <div class="row">
                <h1>One-offs</h1>
                <ul class="singles">
                    <!-- <li
                        class="single"
                        v-for="(single, i) in $page.single.edges"
                        :key="i"
                    >
                        <g-link :to="single.node.path">
                            <g-image
                                class="single__image"
                                :src="single.node.image"
                            />
                        </g-link>
                    </li> -->
                </ul>
            </div>
        </div>
    </Layout>
</template>

<page-query>
  query Singles {
    single: allSingle {
      edges {
        node {
            id
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
.singles {
    list-style-type: none;
}

.single {
}

.single__image {
    width: 100%;
    height: auto;
}
</style>
