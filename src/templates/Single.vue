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

                    <button
                        v-show="!showForm"
                        @click="showForm = true"
                        class="single-item__btn"
                    >
                        Enquire about this artwork
                    </button>

                    <form
                        name="painting"
                        method="post"
                        v-if="showForm && !formSubmitted"
                        v-on:submit.prevent="handleSubmit"
                        action="/success/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        class="single-item__contact-form"
                    >
                        <input
                            type="hidden"
                            name="individual-painting-form"
                            value="contact"
                        />
                        <p hidden>
                            <label>
                                Don’t fill this out: <input name="bot-field" />
                            </label>
                        </p>
                        <div class="single-item__sender-info">
                            <div class="single-item__contact-field">
                                <label
                                    class="single-item__contact-field-label"
                                    for="name"
                                    >Name</label
                                >
                                <input
                                    type="text"
                                    name="name"
                                    class="single-item__contact-field-input"
                                    v-model="formData.name"
                                />
                            </div>
                            <div class="single-item__contact-field">
                                <label
                                    class="single-item__contact-field-label"
                                    for="email"
                                    >Email</label
                                >
                                <input
                                    type="email"
                                    name="email"
                                    class="single-item__contact-field-input"
                                    v-model="formData.email"
                                />
                            </div>
                        </div>

                        <button
                            class="single-item__contact-btn"
                            @click="formSubmitted = true"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>

                    <p v-if="formSubmitted" class="single-item__success">
                        Thanks :) I'll get back to you as soon as possible.
                    </p>

                    <p class="single-item__details">
                        {{ $page.single.details }}
                    </p>
                    <p class="single-item__content">
                        {{ $page.single.description }}
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
        return {
            formData: {},
            showForm: false,
            formSubmitted: false,
        };
    },
    methods: {
        encode(data) {
            return Object.keys(data)
                .map(
                    (key) =>
                        encodeURIComponent(key) +
                        "=" +
                        encodeURIComponent(data[key])
                )
                .join("&");
        },
        handleSubmit(e) {
            this.formData.painting = this.$page.single.title;
            fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: this.encode({
                    "form-name": e.target.getAttribute("name"),
                    ...this.formData,
                }),
            })
                .then(() => {
                    this.formSubmitted = true;
                })
                .catch((error) => alert(error));
        },
    },
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
</style>

