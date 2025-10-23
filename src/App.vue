<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <background-component></background-component>
    <!-- <about-page></about-page>
    <projects-page></projects-page>
    <skills-page></skills-page>
    <elevator-components></elevator-components> -->
  </div>
</template>

<script>
import HeaderComponent from "./modules/header/Header-component.vue";
// import MainPage from "./modules/main/Main-page.vue";
import BackgroundComponent from "./modules/main/Background-component.vue";
// import ProjectsPage from "./modules/projects/Projects-page.vue";
// import SkillsPage from "./modules/skills/Skills-page.vue";
// import ElevatorComponents from "./modules/main/components/Elevator-components.vue";
// import AboutPage from "./modules/about/About-page.vue";

export default {
  components: {
    HeaderComponent,
    // MainPage,
    BackgroundComponent,
    // ProjectsPage,
    // SkillsPage,
    // ElevatorComponents,
    // AboutPage,
  },
};
</script>

<style lang="scss">
@import "./assets/css/global.scss";
@import "./assets/css/vars.scss";
</style>
