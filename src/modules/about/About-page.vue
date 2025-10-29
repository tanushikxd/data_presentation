<template>
  <section class="about">
    <!-- Centered top heading -->
    <h1 class="about_title">About me</h1>

    <div class="about_container">
      <!-- Left side: text box -->
      <div class="about_text">
        <h2 class="about_details-me_name">Tatyana Li</h2>
        <p class="about_details-me_name-intro_text">
          Hi, an enthusiastic and detail-oriented Junior Data Technician and
          Front-End Developer. I have a meaningful background in data handling,
          coding, and UX design, and I’m currently enhancing my skills through
          the Just IT Data Technician Bootcamp, where I’m diving deeper into
          data management, analytics, and visualization. I have solid knowledge
          in SQL, Python, Power BI, and data storytelling, which allows me to
          transform raw data into actionable insights. I’m passionate about
          solving complex problems, optimizing performance, and contributing
          creatively to team projects. I’m now looking for an entry-level role
          in data analytics, data technology, or junior front-end development
          where I can apply my skills, continue learning, and make a meaningful
          impact.
        </p>
        <div class="about_buttons">
          <button @click="getElevator" class="btn">Learn about me</button>
          <button @click="downloadResume" class="btn btn-secondary">
            Learn my CV
          </button>
        </div>
      </div>

      <!-- Right side: photo -->
      <div class="about_image">
        <img src="../../assets/images/img/my_photo.jpg" alt="Tatyana Li" />
      </div>
    </div>
    <elevator-component v-if="showElevator" @close="showElevator = false" />
  </section>
</template>

<script>
import { ref } from "vue";
import ElevatorComponent from "../main/components/Elevator-component.vue";
export default {
  components: { ElevatorComponent },
};
</script>

<script setup>
function downloadResume() {
  const link = document.createElement("a");
  link.href =
    "https://docs.google.com/document/d/15tFmxWxvwr7qF2fmJexC66m1KwId4XsV/edit";
  link.download = "My CV";
  link.target = "_blank";
  link.click();
}

const showElevator = ref(false);

function getElevator() {
  showElevator.value = true;
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/about.scss";
</style>
