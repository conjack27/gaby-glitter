<template>
    <Layout>
        <div class="container">
            <div class="row contact-block">
                <h1 class="contact__title">Get in touch</h1>
                <div class="contact">
                    <form
                        name="contact"
                        method="post"
                        v-if="!showSuccess"
                        v-on:submit.prevent="handleSubmit"
                        action="/success/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        class="contact__form"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                            <label>
                                Don’t fill this out: <input name="bot-field" />
                            </label>
                        </p>
                        <div class="sender-info">
                            <div class="contact__field">
                                <label 
                                class="contact__field-label"
                                for="name" >Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    class="contact__field-input"
                                    v-model="formData.name"
                                />
                            </div>
                            <div class="contact__field">
                                <label 
                                class="contact__field-label"
                                for="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    class="contact__field-input"
                                    v-model="formData.email"
                                />
                            </div>
                        </div>

                        <div class="contact__field">
                            <label 
                                class="contact__field-label"
                            for="message">The work in question</label>
                            <input
                                type="text"
                                name="message"
                                v-model="formData.message"
                                class="contact__field-input"
                            ></input>
                        </div>

                        <button class="contact__btn" type="submit">Submit</button>
                    </form>
                    <p  class="contact__success" v-else>Thank you! I will get back to you as soon as possible :)</p>
                    <div class="contact__info">
                        <p>For other questions/requests, feel free to contact me</p>
                        <p class="contact__info-details">
                            <span class="contact__info-details--email">E: <a href="mailto:info@gabyjonna.com"><b>info@gabyjonna.com</b></a></span>
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    data() {
        return {
            formData: {},
            showSuccess: false,
        };
    },
    metaInfo: {
        title: "Contact",
    },
    created() {
        if (this.$route.query.artwork) {
            this.formData.message = this.$route.query.artwork;
        }
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
                    this.showSuccess = true;
                })
                .catch((error) => alert(error));
        },
    },
};
</script>

<style lang="scss">
.contact-block {
    @media only screen and (min-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.contact {
    flex: 0 1 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        min-height: 368px;
    }
}

.contact__info {
    font-size: 18px;
    margin-top: 20px;
    text-align: center;

    @media only screen and (min-width: 600px) {
        margin-left: 80px;
        padding-top: 70px;
        max-width: 320px;
    }
}

.contact__success {
    font-size: 21px;
    margin-top: 20px;
    font-weight: 700;

    @media only screen and (min-width: 600px) {
        margin-top: 140px;
    }
}

.contact__title {
    flex: 0 1 100%;
    letter-spacing: 1px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
}

.contact__form {
}

.contact__field,
.contact__btn {
    margin-top: 20px;
}

.contact__btn {
    width: 100%;
}

.contact__field-input {
    width: 100%;
    height: 50px;
    font-size: 18px;
    @media only screen and (min-width: 600px) {
        min-width: 300px;
    }
}

.contact__field-label {
    font-size: 20px;
    font-weight: 400;
}

.contact__info-details {
    display: flex;
    flex-wrap: wrap;
    font-style: italic;

    span {
        flex: 0 1 100%;
        letter-spacing: 0.7px;
    }
}

.contact__info-details--email {
    a {
        font-style: normal;

        &:hover {
            text-decoration: none;
        }
    }
}
</style>