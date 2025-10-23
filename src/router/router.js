import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import About from "../modules/about/About-page.vue";
import Skills from "../modules/skills/Skills-page.vue";
import Projects from "../modules/projects/Projects-page.vue";
import Main from "../modules/main/Main-page.vue";
import Contact from "../modules/contact/Contact-page.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/main",
      name: "main",
      component: Main,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});
