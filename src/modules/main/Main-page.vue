<template>
  <section class="hero">
    <div class="hero_container">
      <!-- Фото -->
      <div class="hero_photo">
        <img src="@/assets/images/img/my_photo.jpg" alt="Tatyana Li" />
      </div>

      <!-- Текст -->
      <div class="hero_text">
        <h1 class="hero_title">Tatyana Li</h1>
        <p class="hero_subtitle">
          Junior Data Technician & Front-End Developer
        </p>

        <!-- Интерактивное описание -->
        <p class="hero_description">
          {{ currentText }}
        </p>

        <!-- Соцсети -->
        <div class="hero_socials">
          <a
            href="https://github.com/tanushikxd"
            target="_blank"
            aria-label="GitHub"
          >
            <img src="@/assets/icons/github.svg" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/tatyana-li-21415321b/?locale=en_US"
            target="_blank"
            aria-label="LinkedIn"
          >
            <img src="@/assets/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://twitter.com/tanushikxd"
            target="_blank"
            aria-label="Twitter"
          >
            <img src="@/assets/icons/x_icon.svg" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100077449761135"
            target="_blank"
            aria-label="Twitter"
          >
            <img src="@/assets/icons/facebook.svg" alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
    <!-- <div class="hero_ep">
      <h2 class="her_ep-title">Elevator Pitch</h2>
      <p class="hero_ep-title_info">
        Hi, I’m Tatyana Li, a Liverpool-based Data Technician and Front-End
        Developer. I hold a BA in Journalism (2012) and am currently enhancing
        my skills through the Just IT Data Technician Bootcamp (2025), where I’m
        mastering data modeling, SQL, Power BI, Python, and data
        visualization—skills I’m passionate by how data analytics tools can to
        turn raw data into actionable insights.
      </p>
      <p class="hero_ep-title_info info2">
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
      <p class="hero_ep-title_info info3">
        Outside of work, I’m passionate about practicing coding and solving
        tasks, digital art, learning languages, reading books, watching horror
        movies, and I love to find different videos that encourage Women in
        Technology. I’m eager to apply my technical expertise and creative
        mindset in an entry-level data role to deliver impactful solutions.
        Let’s connect to discuss how I can contribute!
      </p>
    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        "I enjoy being myself💡",
        "Passionate about coding and clean UI ✨",
        "Always learning and exploring new technologies 🚀",
      ],
      currentIndex: 0,
      currentText: "",
    };
  },
  mounted() {
    this.currentText = this.texts[0];
    this.startTextRotation();
  },
  methods: {
    startTextRotation() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        this.currentText = this.texts[this.currentIndex];
      }, 3000); // меняется каждые 3 секунды
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main.scss";
</style>
