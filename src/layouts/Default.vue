<template>
  <div >
<header class="row header">
      <nav class="nav">
          <g-link class="nav__logo" to="/">{{ $static.metadata.siteName }}</g-link>
        <ul class="nav__menu" :class="{ show: showMenu}">
          <li class="nav__menu-item">
          <g-link class="nav__link" to="/">Projects</g-link>
          </li>
          <li class="nav__menu-item">
          <g-link class="nav__link" to="/about/">One-Offs</g-link>
          </li>
          <li class="nav__menu-item">
          <g-link class="nav__link" to="/One-Offs/">One-Offs</g-link>
          </li>
          <li class="nav__menu-item">
          <g-link class="nav__link" to="/about/">About Me</g-link>
          </li>
          <li class="nav__menu-item">
          <g-link class="nav__link" to="/about/">Contact</g-link>
          </li>
        </ul>
        <span v-on:click="toggleMenu" class="nav__button"></span>
      </nav>
    </header>
    <div class="content">
    <slot/>
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
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss">
$black: #0B0B09;
$white: #FFFFFF;
$cream: #FAFAFA;
$grey: #687876;

@font-face {
    font-family: Palatino;
    src: url('../assets/Palatino/Palatino.ttf');
    src: url('../assets/Palatino/Palatino.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/Palatino/Palatino.woff') format('woff'), /* Pretty Modern Browsers */
       url('../assets/Palatino/Palatino.ttf')  format('truetype'), /* Safari, Android, iOS */
  }

  * {
    font-family: Palatino;
  }

  .app.container {
    margin-top: 100px;
  }
  img {
    width: 20px;
    height: 20px;
  }

  .header {
    position: fixed;
    width: 100vw;
    z-index: 99;
  }

  .nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: sticky;
  }

  .nav__logo {
    flex: 0 1 100%;
    padding: 10px;
    border-bottom: 1px solid $black;
    z-index: 9;
    overflow: hidden;
    background-color: $white;
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

  .nav__menu {
    display: flex;
    flex-direction: column-reverse;
    padding-left: 10px;
    list-style-type: none;
    margin-bottom: 0;
    background-color: $white;
    width: 100%;
    border-bottom: 1px solid $black;
    max-height: 0px;
      transition: max-height .2s linear;

    &.show {
      padding-top: 10px;
      max-height: 184px;
    }
  }

  .nav__button {
    z-index: 10;
    position: absolute;
    top: 0px;
    right: 15px;
    flex: 1 0 auto;
    background-image: url('../assets/Icons/menu.svg');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;
  } 

  .content {
    padding-top: 50px;
  }
</style>
