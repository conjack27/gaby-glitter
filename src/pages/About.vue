<template>
    <Layout>
        <div class="container">
            <div class="row">
                <div class="about">
                    <img
                        src="../assets/Images/gaby.jpg"
                        alt="Me :)"
                        class="about__image"
                    />
                    <div class="about__text">
                        <h1>About me</h1>
                        <div>{{$page.aboutText.edges[0].node
                                        .aboutText}}</div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
 query AboutPageText {
    aboutText: allAboutText {
      edges {
        node {
            path
            aboutText
        }
      }
    }
  }
</page-query>

<script>
export default {
    metaInfo: {
        title: "About me",
    },
};
</script>

<style lang="scss">
.about {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
    }
}

.about__image {
    width: 100%;
    height: auto;
    flex: 1 0 auto;

    @media only screen and (min-width: 600px) {
        max-width: 300px;
    }

    @media only screen and (min-width: 900px) {
        max-width: 500px;
    }
}

.about__text {
    margin-top: 30px;
    text-align: center;

    h1 {
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
    }

    p {
        font-size: 18px;
        margin-bottom: 14px;
    }

    @media only screen and (min-width: 600px) {
        margin-top: 0px;
        margin-left: 30px;
    }
}
</style>