<template>
  <div class="projects">
    <h1>My project</h1>
    <p class="projects_into">
      Here, I'd like to show you little part of the work I've done so far. It's
      not something inredible, but I've put lot of hardwork for it!
    </p>
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
        {
          id: 2,
          title: "Netflix data",
          description: "How trends on Netflix was changing with a time",
          link: "https://github.com/tanushikxd/netflix_dataset",
        },
        {
          id: 3,
          title: "Student workbook",
          description:
            "Tried to get the best AVG mark, highlight the overal class grades",
          link: "https://github.com/tanushikxd/student_lesson_example",
        },
        {
          id: 4,
          title: "GDP workbook",
          description:
            "Tried to compare GDP values in different countries, combined by region and selected TOP 10",
          link: "https://github.com/tanushikxd/GDP_class_example",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/projects.scss";
</style>
