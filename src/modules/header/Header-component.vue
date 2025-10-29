<template>
  <header class="header">
    <div class="container">
      <header class="wrapper">
        <nav class="nav" :class="{ active: menuOpen }">
          <ul class="nav-menu">
            <li class="nav-menu_item">
              <router-link to="/main" class="nav-menu_item-link"
                >Home</router-link
              >
            </li>
            <li class="nav-menu_item">
              <router-link to="/about" class="nav-menu_item-link"
                >About me</router-link
              >
            </li>
            <li class="nav-menu_item">
              <router-link to="/projects" class="nav-menu_item-link"
                >Projects</router-link
              >
            </li>
            <li class="nav-menu_item">
              <router-link to="/skills" class="nav-menu_item-link"
                >Skills</router-link
              >
            </li>
            <li class="nav-menu_item">
              <router-link to="/contact" class="nav-menu_item-link"
                >Contacts</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="burger" :class="{ open: menuOpen }" @click="toggleMenu">
          <span></span><span></span><span></span>
        </div>
      </header>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      menuOpen: false,
      menu: [
        { label: "Home", path: "/" },
        { label: "About me", path: "/about" },
        { label: "Projects", path: "/projects" },
        { label: "Skills", path: "/skills" },
        { label: "Contacts", path: "/contacts" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
  watch: {
    $route() {
      this.menuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/header.scss";
</style>
