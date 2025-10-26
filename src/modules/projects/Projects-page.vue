<template>
  <div class="projects">
    <h1>My project</h1>
    <div class="projects-list">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">Open in github</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Superstore data",
          description: "Different tools been used for this project",
          link: "https://github.com/tanushikxd/data_presentation_visuals",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/projects.scss";
</style>
