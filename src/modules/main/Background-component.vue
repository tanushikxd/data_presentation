<template>
  <div class="stars-container">
    <div
      v-for="(star, index) in starArray"
      :key="index"
      class="star"
      :style="{
        left: star.left,
        top: star.top,
        width: star.size,
        height: star.size,
        animationDuration: star.duration,
        animationDelay: star.delay,
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// variables for star creation
const TOTAL_STARS = 150;
const MIN_SIZE = 1; // min star size (px)
const MAX_SIZE = 5; // max star size (px)
const MIN_DURATION = 10; // min animation gap in sec
const MAX_DURATION = 20; // max animation gap in sec
const MAX_DELAY = 10; // max animation delay in sec

const starArray = ref([]);

// random number between min and max
const randomBetween = (min, max) => Math.random() * (max - min) + min;

// Function to create a single star object
const createStar = () => ({
  left: `${randomBetween(0, 100)}%`,
  top: `${randomBetween(0, 100)}%`,
  size: `${randomBetween(MIN_SIZE, MAX_SIZE)}px`,
  duration: `${randomBetween(MIN_DURATION, MAX_DURATION)}s`,
  delay: `${randomBetween(0, MAX_DELAY)}s`,
});

// star field
const createStarField = () => {
  // fill array with star objects
  starArray.value = Array.from({ length: TOTAL_STARS }, createStar);
};

// mount component and run it
onMounted(() => {
  createStarField();
});
</script>

<style lang="scss">
@import "../../assets/css/background.scss";
</style>
