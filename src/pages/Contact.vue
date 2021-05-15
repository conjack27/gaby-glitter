<template>
    <Layout>
        <div class="container">
            <div class="row">
                <h1>Get in touch</h1>
                <div class="contact">
                    <form
                        name="contact"
                        method="post"
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
                                for="name" >Your name</label>
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
                                for="email">Your email</label>
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
                            for="message">Painting you want to know more about</label>
                            <input
                                type="text"
                                name="message"
                                v-model="formData.message"
                                class="contact__field-input"
                            ></input>
                        </div>

                        <button class="contact__btn" type="submit">Submit form</button>
                    </form>
                    <div class="contact__info">
                        <p>For other requests/questions, feel free to send me an email at <a href="mailto:test@gmail.com">gabyjonna@gmail.com</a></p>
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
        };
    },
    metaInfo: {
        title: "About us",
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
                .then(() => this.$router.push("/success"))
                .catch((error) => alert(error));
        },
    },
};
</script>

<style lang="scss">
.contact {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
    }
}

.contact__info {
    font-size: 18px;
    margin-top: 20px;

    @media only screen and (min-width: 600px) {
        margin-left: 100px;
    }
}

.contact__form {
}

.contact__field,
.contact__btn {
    margin-top: 20px;
}

.contact__btn {
    display: block;
}

.contact__field-input {
    width: 100%;
    height: 50px;
    font-size: 18px;
    @media only screen and (min-width: 600px) {
    }
}

.contact__field-label {
    font-size: 20px;
    font-weight: 400;
}
</style>