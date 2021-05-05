<template>
    <Layout>
        <div class="container">
            <div class="row">
                <h1>Projects</h1>
                <ul class="projects">
                    <li
                        class="project"
                        v-for="(project, i) in $page.project.edges"
                        :key="i"
                    >
                        <g-link :to="project.node.path"
                            >{{ project.node.title }}
                        </g-link>
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
</template>

<page-query>
  query Projects {
    project: allProject {
      edges {
        node {
          path
          title
        }
      }
    }
  }
</page-query>

<script>
export default {
    metaInfo: {
        title: "Projects",
    },
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss">
</style>
