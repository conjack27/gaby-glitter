<template>
    <div>
        <header class="row header">
            <div class="container">
                <div class="row">
                    <nav class="nav">
                        <g-link class="nav__logo" to="/">{{
                            $static.metadata.siteName
                        }}</g-link>
                        <ul class="nav__menu" :class="{ show: showMenu }">
                            <li class="nav__menu-item">
                                <g-link class="nav__link" to="/projects"
                                    >Projects</g-link
                                >
                            </li>
                            <li class="nav__menu-item">
                                <g-link class="nav__link" to="/singles/"
                                    >One-Offs</g-link
                                >
                            </li>

                            <li class="nav__menu-item">
                                <g-link class="nav__link" to="/about/"
                                    >About Me</g-link
                                >
                            </li>
                            <li class="nav__menu-item">
                                <g-link class="nav__link" to="/contact/"
                                    >Contact</g-link
                                >
                            </li>
                        </ul>
                        <span
                            v-on:click="toggleMenu"
                            class="nav__button"
                            :class="{ menuOpen: showMenu }"
                        ></span>
                    </nav>
                </div>
            </div>
        </header>
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
    },
};
</script>

<style lang="scss">
@import "../assets/main.scss";

.header {
    position: fixed;
    width: 100vw;
    z-index: 99;
    background-color: $white;

    @media only screen and (min-width: 600px) {
        position: relative;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    }
}

.nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media only screen and (min-width: 600px) {
        padding: 10px;
        flex-wrap: nowrap;
    }
}

.nav__logo {
    flex: 0 1 100%;
    padding: 10px;
    border-bottom: 1px solid $black;
    z-index: 9;
    overflow: hidden;
    background-color: $white;

    @media only screen and (min-width: 600px) {
        border-bottom: none;
        flex: 0 1 150px;
    }
}

.nav__link,
.nav__logo {
    text-decoration: none;
    font-weight: 700;
    color: $black;
    font-size: 18px;
    line-height: 24px;
    z-index: 8;
}

.nav__link {
    &.active {
        text-decoration: underline;
    }
}

.nav__menu {
    display: flex;
    flex-direction: column-reverse;
    padding-left: 10px;
    list-style-type: none;
    margin-bottom: 0;
    background-color: $white;
    width: 100%;
    // border-bottom: 1px solid $black;
    max-height: 0px;
    transition: max-height 0.2s linear;

    &.show {
        padding-top: 10px;
        max-height: 184px;
    }

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        max-height: none;
        max-width: 600px;
        align-items: center;
        padding-left: 0;
        border-bottom: none;
    }
}

.nav__menu-item {
    @media only screen and (min-width: 600px) {
        margin-bottom: 0;
    }
}

.nav__button {
    z-index: 10;
    position: absolute;
    top: 0px;
    right: 15px;
    flex: 1 0 auto;
    background-image: url("../assets/Icons/menu.svg");
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;

    &.menuOpen {
        background-image: url("../assets/Icons/close.svg");
        height: 23px;
        width: 23px;
        top: 9px;
        right: 24px;
    }

    @media only screen and (min-width: 600px) {
        display: none;
    }
}

.content {
    padding-top: 50px;
}
</style>
