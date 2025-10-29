<template>
  <div class="elevator-overlay">
    <div class="elevator-content">
      <button class="close-btn" @click="$emit('close')">×</button>
      <h2>Who Am I?</h2>
      <p class="elevator_container-title_info info1">
        With over a decade of work history, including creative and tech roles
        such as Front-End Developer at Init.kz (2023), where I optimized web
        performance by 15% using JavaScript, HTML and CSS, and earlier UX design
        and copywriting positions, I bring transferable skills like strong
        problem-solving & analytical mindset, attention to detail, excellent
        communications and collaboration key disciplines needed in a data
        career. I love uncovering patterns, solving complex problems, and
        turning raw information into actionable insights that can make a real
        difference. Data fascinates me as a way to combine analytical thinking
        with creativity—telling stories through numbers and helping
        organizations make smarter, evidence-based decisions.
      </p>
      <p class="elevator_container-title_info info2">
        Outside of work, I’m passionate about practicing coding and solving
        tasks, digital art, learning languages, reading books, watching horror
        movies, and I love to find different videos that encourage Women in
        Technology. I’m eager to apply my technical expertise and creative
        mindset in an entry-level data role to deliver impactful solutions.
        Let’s connect to discuss how I can contribute!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/elevator.scss";
</style>
