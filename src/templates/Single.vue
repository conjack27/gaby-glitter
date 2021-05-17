<template>
    <Layout>
        <div class="container">
            <div class="row">
                <div class="single-item">
                    <h1 class="single-item__heading">
                        {{ $page.single.title }}
                    </h1>
                    <g-image
                        class="single-item__image"
                        :src="$page.single.image"
                        width="500"
                    />

                    <!-- <p class="single-item__details">
                        {{ $page.single.details }}
                    </p> -->
                    <p class="single-item__content">
                        {{ $page.single.content }}
                    </p>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
    query Single ($path: String!) {
        single: single (path: $path) {
            title
            image
            content
        }
    }
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.single.title,
        };
    },
};
</script>

<style lang="scss">
.single-item {
    display: flex;
    flex-wrap: wrap;
}

.single-item__image,
.single-item__heading,
.single-item__details,
.single-item__content {
    flex: 0 1 100%;
    text-align: center;
    @media only screen and (min-width: 600px) {
    }
}

.single-item__details {
    font-style: italic;
}

.single-item__image {
    width: 100%;
    height: auto;

    @media only screen and (min-width: 600px) {
        margin-left: auto;
        margin-right: auto;
        max-width: 600px;
    }
}
</style>

