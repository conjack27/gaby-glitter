<template>
    <Layout>
        <div class="container">
            <div class="row">
                <h1>One-offs</h1>
                <ul class="singles">
                    <li
                        class="single"
                        v-for="(single, i) in $page.single.edges"
                        :key="i"
                    >
                        <g-link class="single__link" :to="single.node.path">
                            <g-image
                                class="single__image"
                                :src="single.node.image"
                            />
                            <h1 class="single__image-heading">
                                {{ single.node.title }}
                            </h1>
                            <div class="single__image-overlay"></div>
                        </g-link>
                    </li>
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
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss">
//https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/
@import "../assets/main.scss";
.singles {
    list-style-type: none;

    @media only screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
}

.single {
    position: relative;
    z-index: 1;

    &:hover {
        .single__image-overlay {
            opacity: 0.25;
        }

        .single__image-heading {
            @media only screen and (min-width: 600px) {
                opacity: 1;
            }
        }
    }
}

.single__image {
    width: 100%;
    height: auto;
}

.single__image-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 2;
    top: 0;
    left: 0;
    opacity: 0.25;
    transition: opacity 0.2s linear;

    @media only screen and (min-width: 600px) {
        opacity: 0;
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
