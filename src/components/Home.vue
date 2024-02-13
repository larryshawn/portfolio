<script setup lang="ts">
  import { inject } from 'vue';

  // This is typescript
  // Define the types of injected data
  interface MyData {
    message: string
    isHuman: boolean
    feelings: string[]
  }

  // Inject provided data and specify types
  // const injectedMessage = inject<string>('message')
  // const injectedIsHuman = inject<boolean>('isHuman')
  // const injectedFeelings = inject<string[]>('feelings')

  // Component-level data
  // const componentData = 'Component-level Data'
</script>

<template>
<div>
    <h1>Welcome!</h1>
    <p>Hello there! 👋</p>

    <!-- <p>{{ injectedMessage }}, I am {{ injectedIsHuman }}</p>

    <ul>
      <li v-for="feeling in injectedFeelings">{{ feeling }}</li>
    </ul>

    <p>{{ componentData }}</p> -->

    <p>My name is Larry. I'm an enthusiastic and dynamic front-end web developer on a mission to create stunning digital experiences. While you're visiting my website, please bear with the current design – I'm in the process of giving it an exciting makeover to reflect my latest and greatest projects!</p>

    <h2>Why the Change?</h2>
    <p>I believe in constantly evolving and pushing the boundaries of what's possible in web development. To keep things fresh and up-to-date, I'm revamping my portfolio to showcase my recent achievements, skills, and innovative design approaches.</p>

    <h2>What's in Store?</h2>
    <p>You can expect a brand-new look that mirrors my commitment to clean, user-friendly design and cutting-edge technology. I'll be featuring a curated selection of projects that highlight my proficiency in front-end technologies such as HTML5, CSS3, JavaScript, Vue.js and more. Stay tuned for a visual feast of creativity and functionality!</p>

    <h2>Connect with Me</h2>
    <p>In the meantime, I'd love to connect with you! Feel free to reach out via <a href="https://www.linkedin.com/in/larryshawn/">Linked in</a> I'm always excited to discuss potential collaborations, share insights, or simply chat about the ever-evolving world of web development.</p>

    <p>Thanks for your understanding and patience as I level up my digital presence. Here's to the future of web development – let's create something amazing together!</p>

    <p>Best regards,<br>
    Larry Babcock</p>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>