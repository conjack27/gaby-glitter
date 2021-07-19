  
<template>
    <Layout>
        <div class="container">
            <div class="row">
                <h1 class="project__title">{{ $page.project.title }}</h1>
                <p class="project__subtitle">{{ $page.project.description }}</p>
                <div v-if="$page.project.video" class="project__video">
                    <div style="padding: 75% 0 0 0; position: relative">
                        <iframe
                            :src="$page.project.video"
                            style="
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                            "
                            frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

                <div class="masonry">
                    <div
                        class="masonry-item"
                        v-for="(img, i) in $page.project.images"
                        :key="i"
                    >
                        <g-image class="masonry-item__image" :src="img.image" />
                        <p
                            class="
                                masonry-item__image-heading
                                masonry-item__image--details
                            "
                        >
                            <span class="masonry-item__image--details-title"
                                >{{ img.title }}
                            </span>
                            <span class="masonry-item__image--details-text">{{
                                img.details
                            }}</span>
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
            description
            video
            images {
                image
                title
                details
            } 
        }
    }
</page-query>

<script src="https://player.vimeo.com/api/player.js"></script>
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
    left: 25px;
    font-size: 22px;
    font-style: italic;
    width: 90%;
}

.masonry-item__image--details-title {
    font-size: 18px;
    font-style: normal;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    padding-bottom: 5px;
    display: block;
    width: 90%;
}

.masonry-item__image--details-text {
    text-align: center;
    font-size: 12px;
    font-style: italic;
    display: block;
    line-height: 1;
    width: 90%;
    text-transform: initial;
}

.project__title {
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
}

.project__subtitle {
    text-align: center;
}
</style>
