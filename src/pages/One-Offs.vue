<template>
    <Layout>
        <div class="container">
            <div class="row">
                <h1>One-offs</h1>
                <ul>
                    <li v-for="(oneOff, i) in $page.oneOff.edges" :key="i">
                        {{ oneOff.node.title }}
                        <g-image :src="oneOff.node.image" />
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
</template>

<page-query>
  query OneOffs {
    oneOff: allOneOff {
      edges {
        node {
          title
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
    created() {
        // this.$page.one-offs.edges.forEach(item => {
        //   const parsedDate = new Date(item.node.date).toDateString();
        //   item.node.date = parsedDate;
        // });
    },
    methods: {},
};
</script>

<style lang="scss">
</style>
