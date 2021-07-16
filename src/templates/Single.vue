<template>
    <Layout>
        <div class="container">
            <div class="row">
                <div class="single-item">
                    <h1 class="single-item__heading">
                        {{ $page.single.title }}
                    </h1>
                    <p class="single-item__details">
                        {{ $page.single.description }}
                    </p>
                    <g-image
                        class="single-item__image"
                        :src="$page.single.image"
                        width="500"
                    />

                    <a
                        class="button button-primary single-item__btn"
                        :href="`/contact?artwork=${$page.single.title}`"
                    >
                        Enquire about this work
                    </a>
                    
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
            description
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
    data() {
        return {};
    },
    mounted() {},
};
</script>

<style lang="scss">
.single-item {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 600px) {
    }
}

.single-item__btn {
    width: 100%;
    margin-top: 10px;

    @media only screen and (min-width: 600px) {
        margin-top: 20px;
        width: auto;
        flex: 0 1 auto;
        max-width: 300px;
        align-self: center;
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

.single-item__contact-form,
.single-item__success {
    display: flex;
    margin-top: 10px;
    flex-direction: column;

    @media only screen and (min-width: 600px) {
        align-items: flex-end;
        justify-content: center;
        flex-direction: row;
    }
}

.single-item__sender-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
    }
}

.single-item__contact-field {
    margin-left: 10px;
    margin-right: 10px;
}

.single-item__contact-btn {
    margin-top: 10px;
    @media only screen and (min-width: 600px) {
        margin-top: 0;
    }
}

.single-item__heading {
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
}

.single-item__details {
    text-align: center;
    letter-spacing: 1px;
    font-style: initial;
}

</style>

