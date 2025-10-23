<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="contact__title">Contact Me</h2>
      <p class="contact__subtitle">
        I want to hear more from you. Doesn't matter what is it: a job offer, a
        question or just to say "Hi", just drop a message for me and I'll
        respond ASAP!
      </p>

      <form class="contact__form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name*</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            placeholder="Your name"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email*</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="your@email.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            v-model="form.message"
            id="message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit" class="btn">Send Message</button>

        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      successMessage: "",
    };
  },
  methods: {
    handleSubmit() {
      // not connected though server
      console.log("Form data:", this.form);

      this.successMessage = "✅ Message successfully sent!";
      this.form = { name: "", email: "", message: "" };

      setTimeout(() => (this.successMessage = ""), 4000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/contact.scss";
</style>
