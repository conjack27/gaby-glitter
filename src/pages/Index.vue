<template>
    <Layout>
        <div class="container">
            <div class="row">
                <div class="one-half column">
                    <g-link to="/Projects/">
                        <div class="home__image home__image--1">
                            <h1 class="home__image-heading">Projects</h1>
                            <div class="home__image-overlay"></div>
                        </div>
                    </g-link>
                </div>
                <div class="one-half column">
                    <g-link to="/singles/">
                        <div class="home__image home__image--2">
                            <h1 class="home__image-heading">One-Offs</h1>
                            <div class="home__image-overlay"></div>
                        </div>
                    </g-link>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: "Gaby Jonna",
    },
};
</script>

<style lang="scss">
@import "../assets/main.scss";

.home__image {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 50vh;
    position: relative;
    z-index: 1;

    &:hover {
        .home__image-overlay {
            opacity: 0.25;
        }

        .home__image-heading {
            @media only screen and (min-width: 600px) {
                opacity: 1;
            }
        }
    }
}

.home__image-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 2;
    opacity: 0.25;
    transition: opacity 0.2s linear;

    @media only screen and (min-width: 600px) {
        opacity: 0;
    }
}

.home__image-heading {
    z-index: 3;
    position: absolute;
    top: 40%;
    left: 20%;
    text-transform: uppercase;
    font-size: 42px;
    color: $white;
    transition: opacity 0.2s linear;

    @media only screen and (min-width: 600px) {
        left: 28%;
        opacity: 0;
    }
}

.home__image--1 {
    background-image: url("../assets/Images/eggs.jpg");
}
.home__image--2 {
    background-image: url("../assets/Images/egg.jpg");
}
</style>
