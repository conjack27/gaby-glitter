  
<template>
    <Layout>
        <div class="container">
            <div class="row">
                <div class="masonry">
                    <div
                        class="masonry-item"
                        v-for="(project, i) in $page.project.edges"
                        :key="i"
                    >
                        <g-link
                            class="masonry-item__link"
                            :to="project.node.path"
                        >
                        </g-link>
                        <g-image
                            class="masonry-item__image"
                            :src="project.node.coverImage"
                        />

                        <h1 class="masonry-item__image-heading">
                            {{ project.node.title }}
                        </h1>
                    </div>
                </div>
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
          coverImage
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
    created() {
        console.log(this.$page);

    },
    methods: {},
};
</script>
