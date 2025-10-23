<template>
  <div class="stars-container" ref="starsContainer"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const starsContainer = ref(null);

function createStars() {
  const numStars = 150;
  const container = starsContainer.value;
  if (!container) return;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // разные размеры и скорости
    const size = Math.random() * 4 + 1;
    star.style.width = star.style.height = `${size}px`;
    // star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationDuration = `${Math.random() * 10 + 10}s`;

    star.style.animationDelay = `${Math.random() * 10}s`;

    container.appendChild(star);
  }
}

onMounted(() => {
  createStars();
});
</script>

<style lang="scss">
@import "../../assets/css/background.scss";
</style>
