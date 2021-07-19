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
                        <p>
                            Creation to me is the methodology to question and r
                            eveal myself and reveal humankind to oneself. It is
                            the method to communicate, explore, connect via the
                            universal language of imagination and personal
                            interpretation. To create is my way to ask and give
                            questions to life, to the universe, to existence.
                        </p>
                        <p>
                            This dialogue is an evolving perspective: the view
                            of the behol der and view of the creator are often
                            different. This makes it an ever-evolving
                            conversation. In the end the viewer becomes the
                            participant and completes the work as they become
                            the cr eator of their own self.
                        </p>
                        <p>
                            Creating and experiencing creation is not only
                            something we do with our sight, but rather with all
                            of our faculties. Our nerves, instincts, memories
                            and senses in relation to our awareness of existing.
                            All the while becoming aware and understanding there
                            are more views possible, for you to apply or to
                            acknowledge. Or just to question.
                        </p>
                        <p>
                            The questioning is the concept, the cr eation takes
                            shape from the concept and moulds into any form the
                            exploration allows.
                        </p>
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