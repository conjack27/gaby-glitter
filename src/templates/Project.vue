  
<template>
    <Layout>
        <div class="container">
            <div class="row">
                <h1 v-html="$page.project.title"></h1>
                <p v-html="$page.project.content"></p>

                <div class="masonry">
                    <div
                        class="masonry-item"
                        v-for="(img, i) in $page.project.images"
                        :key="i"
                    >
                        <g-image class="masonry-item__image" :src="img.image" />
                        <p
                            class="masonry-item__image-heading masonry-item__image--details"
                        >
                            {{ img.details }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
    query Project ($path: String!) {
        project: project (path: $path) {
            title
            content
            images {
                image
                details
            } 
        }
    }
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.project.title,
        };
    },
};
</script>

<style lang="scss" scoped>
.masonry-item__image--details {
    top: 38%;
    left: 20px;
    font-size: 22px;
    font-style: italic;
}
</style>
