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
                        <g-link class="single__link" :to="single.node.path">
                        </g-link>
                        <g-image
                            class="single__image"
                            :src="single.node.image"
                        />

                        <h1 class="single__image-heading">
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
@import "../assets/main.scss";

.masonry {
    @media only screen and (min-width: 600px) {
        gap: 2rem;
        column-count: 3;
    }
}

.masonry-item {
    position: relative;
    z-index: 1;

    &:hover {
        .single__image-heading {
            @media only screen and (min-width: 600px) {
                opacity: 1;
            }
        }
        .single__image {
            @media only screen and (min-width: 600px) {
                filter: brightness(65%);
            }
        }
    }
}

.single__link {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 4;
}

.single__image {
    width: 100%;
    height: auto;
    filter: brightness(65%);

    @media only screen and (min-width: 600px) {
        filter: brightness(100%);
    }
}

.single__image-heading {
    z-index: 3;
    position: absolute;
    top: 20px;
    left: 20px;
    text-transform: uppercase;
    font-size: 42px;
    color: $white;
    transition: opacity 0.2s linear;
    margin: 0;

    @media only screen and (min-width: 600px) {
        left: 28%;
        opacity: 0;
    }
}
</style>
