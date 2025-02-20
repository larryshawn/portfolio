<script setup>
import { ref, defineComponent } from 'vue'
import projectsData from '../projects.json'
import Drawer from './Drawer.vue'
import EventTimeline from '@/components/EventTimeline.vue'
import EmploymentHistoryData from '@/data/employment-history.json'

import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay()

const components = {
  EventTimeline
}

const timeline = ref(EmploymentHistoryData)
const projects = ref(projectsData.projects)
const drawer = ref(false)
const selectedProject = ref(null)

const openDrawer = (index) => {
  selectedProject.value = projects.value[index]
  drawer.value = true
}
defineComponent({ components })
</script>

<template>
  <!-- <Drawer /> -->
  <Drawer :drawer="drawer" @update:drawer="drawer = $event" class="pt-5">
    <v-list>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-content>
            <h1 class="font-extralight text-3xl">{{ selectedProject?.name || 'Hello' }}</h1>
            <p><a :href="selectedProject?.link">View App</a></p>
            <!-- <h2 class="text-h5">Project type: {{ selectedProject?.type }}</h2> -->
            <v-divider></v-divider>
            <h2 class="text-h5">Task</h2>
            <p>{{ selectedProject?.task || 'Default task description' }}</p>
            <v-divider></v-divider>
            <h2 class="text-h5">Tools used</h2>
            <ul>
              <button
                class="inline-block bg-indigo-400 text-white px-3 py-1 mr-1 my-2 rounded-full"
                v-for="tool in selectedProject?.tools || []"
                :key="tool"
              >
                {{ tool }}
              </button>
            </ul>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </Drawer>

  <v-container class="pt-0">
    <v-row>
      <v-col>
        <v-sheet height="100vh" class="main-bg">
          <v-row align="center">
            <v-col cols="12" md="6">
              <h1 class="text-5xl inline-block" v-motion-pop-visible-once>Hello there!</h1>
              <div
                class="text-5xl inline-block"
                style="transform-origin: bottom right"
                v-motion
                :initial="{
                  scale: 1,
                  x: 0,
                  y: -2,
                  rotate: 45
                }"
                :enter="{
                  x: 2,
                  y: -2,
                  rotate: 35,
                  transition: {
                    duration: 200,
                    delay: 1000,
                    damping: 25,
                    mass: 0.5,
                    repeat: Infinity,
                    repeatType: 'mirror'
                  }
                }"
              >
                👋
              </div>

              <p>My name is Larry. I'm a front-end web developer</p>
            </v-col>
            <v-col cols="12" md="6">
              <div class="home-bg"></div>
            </v-col>
          </v-row>
        </v-sheet>

        <v-sheet>
          <div>
            <h2 class="font-extralight text-3xl">About Me</h2>
            <div class="underline"></div>

            <p>
              I'm a passionate front-end web developer with a love for creating beautiful and
              functional websites. With an international background in both start-up and corporate
              businesses, I bring a unique perspective to web development, blending creativity and
              technical expertise.
            </p>

            <p>
              When I'm not immersed in coding, you'll find me spending quality time with my lovely
              wife and our two energetic young children. Our family adventures are filled with
              laughter and joy, whether we're exploring new places or enjoying a sunny day at the
              beach.
            </p>

            <p>I have a passion for golf, and I love hitting the greens whenever I get a chance.</p>

            <p>
              Traveling is something we love as a family, and we make it a point to explore new
              destinations whenever we can. I'm also an avid mountain biker and enjoy the thrill of
              the trails. My love for motorcycles and snowboarding adds a dash of adrenaline to my
              life.
            </p>

            <p>As a wine enthusiast, I enjoy discovering and savoring new vintages.</p>
            <p>Camping and gardening are my ways to unwind and connect with nature.</p>
          </div>
        </v-sheet>

        <v-sheet>
          <div>
            <h2 class="font-extralight text-3xl">Skills</h2>
            <div class="underline"></div>
            <p>
              I have a diverse skill set that includes the core Front-End Technologies such as
              <strong>HTML5</strong>, <strong>Bootstrap</strong>, <strong>Tailwind</strong>,
              <strong>Flexbox</strong>, <strong>CSS3</strong>, <strong>SASS</strong>,
              <strong>LESS</strong>, <strong>Javascript (ES6)</strong> <strong>TypeScript</strong>.
            </p>
            <p>
              I'm also skilled in modern frameworks and libraries such as
              <strong>Vue.js</strong>, <strong>React.js</strong>,
              <strong>Thymeleaf template engine</strong>, <strong>Spring framework</strong> and
              <strong>Wordpress</strong>.
            </p>
            <p>
              My Front-end integration with back-end environments experience includes working with
              Java based and PHP based environments via <strong>API integration</strong> (Restful).
            </p>
            <p>
              <strong>A/B testing</strong> and <strong>Cross-browser compatability</strong> for
              optimisation as well as <strong>Figma</strong> and <strong>Adobe Suite</strong> for
              prototyping are also part of my skill set.
            </p>
            <p>
              I code using <strong>Single Page Application</strong> (SPA),
              <strong>Resposive web development</strong>, <strong>WC3 Web Standards</strong> and
              <strong>Accessibility</strong> methodologies.
            </p>
            <p>
              I have experience working in <strong>Agile Development</strong> environments using
              development and workflow tools such as: <strong>GitHub</strong>,
              <strong>GitLab</strong>, <strong>Node Package Management</strong>,
              <strong>Jenkins</strong>, <strong>Visual Studio Code</strong>, <strong>Jira</strong>,
              <strong>Confluence</strong>, <strong>ClickUp</strong> and <strong>Assana</strong>.
            </p>
          </div>
        </v-sheet>

        <v-sheet>
          <div>
            <h2 class="font-extralight text-3xl">Vue.js Projects</h2>
            <div class="underline"></div>
            <p>
              Here are some of the projects I have worked on recently. Each project showcases my
              ability to tackle complex problems and deliver high-quality web solutions.
            </p>

            <div class="scroll-container">
              <v-row align="stretch" class="flex-nowrap">
                <MotionGroup preset="slideVisibleOnceRight" :duration="600">
                  <v-col v-for="(project, index) in projects" :key="project.id" class="">
                    <v-card
                      class="mx-auto"
                      width="397"
                      @click="openDrawer(index)"
                      variant="outlined"
                    >
                      <v-img
                        class="align-end text-white custom-img"
                        height="395"
                        :src="project.image"
                        cover
                      >
                        <template v-slot:placeholder>
                          <div class="d-flex align-center justify-center fill-height">
                            <v-progress-circular
                              color="grey-lighten-4"
                              indeterminate
                            ></v-progress-circular>
                          </div>
                        </template>
                      </v-img>
                      <!-- <v-divider class="mt-4"></v-divider> -->
                      <v-card-title>{{ project.name }}</v-card-title>
                      <v-card-actions>
                        <v-btn color="orange-lighten-2" text="Explore"></v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </MotionGroup>
              </v-row>
            </div>
          </div>
        </v-sheet>

        <v-sheet>
          <h2 class="font-extralight text-3xl">Worked on</h2>
          <div class="underline"></div>
          <v-row class="theme-bg" align="center" justify="center">
            <v-col cols="12" md="2" class="ma-2">
              <!-- <p> -->
              <a href="https://www.nakedwines.com" target="_blank">
                <img
                  alt="Nakedwines logo"
                  class="logo"
                  src="@/assets/nakedwines-logo.png"
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.4 }"
                  :delay="20"
                  :duration="200"
                />
              </a>
              <!-- </p> -->
            </v-col>
            <v-col cols="12" md="2" class="ma-2">
              <a href="https://www.luxor.com" target="_blank">
                <img
                  alt="Luxor logo"
                  class="logo"
                  src="@/assets/logo-luxor-default-inverted.svg"
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.4 }"
                  :delay="20"
                  :duration="200"
                /> </a
            ></v-col>
            <v-col cols="12" md="2" class="ma-2">
              <a href="https://www.bellagio.com" target="_blank">
                <img
                  alt="Bellagio logo"
                  class="logo"
                  src="@/assets/logo-bellagio-default-inverted.svg"
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.4 }"
                  :delay="20"
                  :duration="200"
                /> </a
            ></v-col>
            <v-col cols="12" md="2" class="ma-2">
              <a href="https://www.mgmgrand.com" target="_blank">
                <img
                  alt="MGM Grand logo"
                  class="logo"
                  src="@/assets/logo-mgm-grand-default-inverted.svg"
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.4 }"
                  :delay="20"
                  :duration="200"
                /> </a
            ></v-col>
            <v-col cols="12" md="2" class="ma-2">
              <a href="https://www.mandalaybay.com" target="_blank">
                <img
                  alt="Mandalay Bay logo"
                  class="logo"
                  src="@/assets/logo-mandalay-bay-default-inverted.svg"
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.4 }"
                  :delay="20"
                  :duration="200"
                /> </a
            ></v-col>
            <v-col cols="12" md="2" class="ma-2">
              <a href="https://www.newyorknewyork.com" target="_blank">
                <img
                  alt="New York New York logo"
                  class="logo"
                  src="@/assets/logo-new-york-new-york-default-inverted.svg"
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.4 }"
                  :delay="20"
                  :duration="200"
                /> </a
            ></v-col>
            <v-col cols="12" md="2" class="ma-2">
              <a href="https://www.excalibur.com" target="_blank">
                <img
                  alt="Excalibur logo"
                  class="logo"
                  src="@/assets/logo-excalibur-default-inverted.svg"
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.4 }"
                  :delay="20"
                  :duration="200"
                /> </a
            ></v-col>
            <v-col cols="12" md="2" class="ma-2">
              <a href="https://www.sotech.com" target="_blank">
                <img
                  alt="Socratic Technologies logo"
                  class="logo"
                  src="@/assets/sotech-flat.png"
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.4 }"
                  :delay="20"
                  :duration="200" /></a
            ></v-col>
            <v-col cols="12" md="2" class="ma-2">
              <a href="https://moneymutual.com/" target="_blank">
                <svg
                  width="100%"
                  height="35.227"
                  viewBox="0 0 204.357 35.227"
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.4 }"
                  :delay="20"
                  :duration="200"
                >
                  <path
                    fill="#ffffff"
                    d="M37.8 33.872h-9.206V13.174c0-2.046-.337-3.43-1.01-4.154-.85-.923-2.533-1.385-5.054-1.385H9.357v26.237H0V0h27.846c3.318 0 5.84.725 7.56 2.173 1.596 1.35 2.396 3.185 2.396 5.51v26.19zM23.543 15.284v18.588h-8.72V13.25h6.17s2.55-.322 2.55 2.034"
                  ></path>
                  <g fill="#ffffff">
                    <path
                      d="M46.177 2.497h3.887C51.13 4.84 52.96 9.09 55.55 15.253l5.32-12.756h3.82V19.5H62.04l.104-13.885-5.714 13.857h-1.714L48.75 5.682l.122 13.746h-2.695V2.498zM73.78 6.3c1.976 0 3.656.66 5.044 1.978 1.387 1.317 2.082 2.918 2.082 4.798 0 1.82-.697 3.377-2.087 4.672-1.392 1.294-3.045 1.942-4.963 1.942-1.968 0-3.64-.65-5.016-1.95-1.373-1.303-2.06-2.89-2.06-4.764 0-1.808.69-3.373 2.076-4.694C70.242 6.96 71.883 6.3 73.78 6.3zm.096 11.012c1.198 0 2.258-.43 3.178-1.29.922-.86 1.382-1.856 1.382-2.99 0-1.137-.435-2.148-1.305-3.038-.89-.906-1.923-1.36-3.103-1.36-1.28 0-2.388.39-3.32 1.172-.978.81-1.466 1.82-1.466 3.027 0 1.262.444 2.323 1.33 3.187.887.86 1.99 1.292 3.306 1.292zM82.57 6.642h2.574V7.65c1.107-1.02 2.308-1.532 3.6-1.532 1.75 0 3.11.58 4.073 1.74.89 1.058 1.333 2.44 1.333 4.153v7.444h-2.546v-7.3c0-1.026-.21-1.876-.633-2.55-.51-.83-1.267-1.243-2.275-1.243-2.368 0-3.55 1.428-3.55 4.28v6.786H82.57V6.642zM98.577 13.96c.714 2.22 2.092 3.332 4.135 3.332 1.684 0 2.99-.63 3.925-1.893h2.82c-.43 1.274-1.29 2.315-2.582 3.127-1.244.78-2.587 1.17-4.03 1.17-1.95 0-3.59-.666-4.92-2-1.306-1.31-1.96-2.898-1.96-4.768 0-1.796.69-3.337 2.063-4.622 1.37-1.268 2.995-1.902 4.88-1.902 1.996 0 3.66.656 4.996 1.966 1.34 1.31 2.007 2.916 2.007 4.82 0 .09-.016.345-.047.767H98.577zm8.59-2.28c-.283-.82-.79-1.504-1.523-2.05-.75-.562-1.573-.845-2.47-.845-2.345 0-3.833.965-4.464 2.894h8.457zM113.158 6.642l3.752 9.577 4.034-9.578h2.674l-7.332 16.77h-2.746l1.912-4.467-5.135-12.303h2.84zM124.52 2.497h3.885c1.066 2.342 2.895 6.594 5.485 12.756l5.32-12.756h3.82V19.5h-2.647l.104-13.885-5.714 13.857h-1.712l-5.97-13.79.123 13.745h-2.694V2.497zM145.548 6.568h2.573v7.13c0 1.11.22 2.008.652 2.693.52.842 1.327 1.262 2.415 1.262 1.126 0 1.983-.372 2.575-1.117.528-.673.792-1.564.792-2.676V6.567h2.573v12.86h-2.573V18.4c-.617.607-1.224 1.013-1.82 1.216-.528.18-1.268.27-2.216.27-1.83 0-3.163-.738-4-2.216-.646-1.14-.97-2.667-.97-4.577V6.568zM158.11 6.642h1.732V2.497h2.573v4.145h2.166v1.892h-2.165V19.5h-2.573V8.533h-1.73v-1.89zM165.66 6.568h2.573v7.13c0 1.11.217 2.008.65 2.693.523.842 1.327 1.262 2.415 1.262 1.127 0 1.985-.372 2.575-1.117.53-.673.793-1.564.793-2.676V6.567h2.573v12.86h-2.574V18.4c-.615.607-1.223 1.013-1.82 1.216-.528.18-1.267.27-2.215.27-1.83 0-3.162-.738-4-2.216-.646-1.14-.97-2.667-.97-4.577V6.568zM190.522 6.623h2.518v12.85h-2.518v-1.92c-.7.758-1.368 1.3-2.005 1.623-.72.36-1.57.54-2.555.54-1.912 0-3.555-.636-4.934-1.91-1.38-1.272-2.067-2.82-2.067-4.64 0-1.876.63-3.46 1.89-4.76 1.29-1.338 2.91-2.01 4.855-2.01 1.063 0 1.947.164 2.653.488.56.258 1.28.77 2.163 1.53v-1.79zm-4.474 10.715c1.236 0 2.287-.43 3.15-1.29.852-.84 1.277-1.852 1.277-3.036 0-1.058-.417-2.02-1.25-2.893-.856-.896-1.835-1.344-2.933-1.344-1.38 0-2.52.385-3.414 1.153-.927.8-1.39 1.852-1.39 3.153 0 1.207.44 2.22 1.323 3.032.885.816 1.964 1.223 3.238 1.223zM195.35 2.497h2.572v16.93h-2.573V2.498z"
                    ></path>
                  </g>
                  <path
                    fill="#ffffff"
                    d="M201.86 2.156c.42 0 .83.104 1.23.307.4.206.71.5.934.88.222.382.334.78.334 1.195 0 .41-.11.803-.33 1.182-.22.378-.527.673-.923.882-.396.21-.81.313-1.243.313s-.847-.104-1.244-.313c-.396-.21-.703-.504-.925-.882-.22-.38-.33-.772-.33-1.182 0-.415.112-.813.336-1.195.223-.38.533-.674.934-.88.397-.203.808-.307 1.227-.307zm0 .395c-.35 0-.69.086-1.024.258-.33.17-.592.416-.778.734-.19.32-.282.65-.282.996 0 .34.092.67.278.984.183.315.44.56.77.734.33.176.677.264 1.037.264.36 0 .705-.088 1.037-.264s.59-.42.77-.734c.187-.315.276-.644.276-.984 0-.345-.093-.677-.28-.996-.186-.318-.446-.563-.778-.734-.334-.172-.675-.257-1.024-.257zm-1.095 3.303v-2.56h.923c.316 0 .546.022.687.07.14.047.255.13.337.246.085.118.127.242.127.375 0 .187-.07.35-.21.49-.14.137-.328.215-.56.232.097.037.17.083.23.135.106.102.24.27.396.507l.326.502h-.53l-.237-.404c-.187-.316-.34-.516-.453-.597-.08-.057-.194-.087-.347-.087h-.257v1.09h-.433zm.433-1.442h.527c.25 0 .423-.035.515-.107.092-.07.138-.165.138-.282 0-.074-.022-.144-.066-.203-.045-.06-.105-.104-.185-.135-.077-.028-.223-.044-.435-.044h-.494v.773z"
                  ></path>
                  <g fill="#ffffff">
                    <path
                      d="M46.027 33.148l3.02-7.484h1.118l3.217 7.484h-1.185l-.917-2.268h-3.286l-.863 2.268h-1.103zm2.268-3.073h2.664l-.822-2.072c-.25-.63-.436-1.146-.557-1.553-.1.48-.24.956-.422 1.43l-.863 2.195zM56.195 32.327l.14.812c-.272.054-.515.08-.73.08-.35 0-.62-.053-.814-.157-.19-.106-.327-.245-.406-.416-.078-.172-.118-.534-.118-1.086v-3.118h-.707v-.715h.706v-1.343l.96-.552v1.895h.97v.715h-.97v3.17c0 .264.017.432.052.506.032.076.09.134.165.18.076.043.187.065.33.065.106 0 .248-.012.422-.036zM62.113 33.148v-6.6h-2.59v-.885h6.23v.885h-2.6v6.6h-1.04zM66.695 33.148v-7.484h.967v2.686c.448-.498 1.018-.745 1.704-.745.422 0 .787.08 1.098.236.312.16.533.378.667.658.135.278.202.684.202 1.215v3.436h-.964v-3.437c0-.46-.104-.794-.314-1.003-.208-.208-.504-.314-.888-.314-.285 0-.554.07-.806.212-.253.142-.433.333-.538.574-.107.242-.16.575-.16 1.002v2.965h-.967zM76.698 31.402l.997.118c-.157.554-.448.985-.874 1.29-.425.308-.968.46-1.63.46-.83 0-1.492-.244-1.98-.732-.487-.487-.73-1.173-.73-2.055 0-.91.246-1.62.74-2.123.492-.505 1.133-.756 1.918-.756.763 0 1.384.246 1.865.74.482.494.725 1.188.725 2.083 0 .054-.003.136-.006.245h-4.245c.035.596.212 1.052.53 1.368.318.316.715.475 1.19.475.354 0 .655-.09.905-.267.252-.175.45-.457.596-.846zm-3.168-1.485h3.178c-.042-.456-.164-.798-.363-1.026-.308-.353-.706-.53-1.196-.53-.444 0-.817.143-1.118.424-.303.28-.47.66-.502 1.133zM81.725 30.744l.982-.08c.047.372.154.68.324.92s.435.434.79.582c.358.148.762.223 1.207.223.396 0 .747-.058 1.05-.17.306-.112.53-.267.68-.462.147-.195.223-.41.223-.64 0-.237-.072-.44-.215-.616-.144-.176-.38-.322-.708-.442-.212-.078-.677-.2-1.4-.365-.72-.164-1.227-.32-1.516-.467-.374-.188-.653-.42-.838-.697-.184-.276-.276-.587-.276-.93 0-.378.113-.73.338-1.06.226-.328.554-.578.986-.748s.914-.256 1.442-.256c.582 0 1.096.09 1.54.27.445.177.79.44 1.027.787.238.347.367.74.385 1.18l-.997.072c-.053-.475-.234-.83-.544-1.073-.31-.24-.766-.362-1.37-.362-.63 0-1.087.11-1.374.33-.288.22-.43.483-.43.794 0 .268.1.488.304.663.2.174.723.352 1.568.533.845.182 1.424.34 1.738.478.457.2.796.455 1.014.764.22.308.327.663.327 1.063 0 .4-.12.774-.358 1.127-.24.353-.584.626-1.032.822-.448.195-.953.293-1.514.293-.713 0-1.307-.1-1.788-.296-.48-.196-.857-.493-1.13-.89-.274-.397-.42-.845-.433-1.346zM89.278 35.227v-7.5h.88v.704c.206-.274.44-.48.7-.62.262-.137.578-.205.95-.205.485 0 .914.12 1.286.357.37.238.65.574.84 1.01.19.433.286.908.286 1.425 0 .556-.104 1.055-.315 1.5-.208.443-.512.783-.91 1.02-.397.237-.817.354-1.257.354-.32 0-.61-.062-.866-.192-.254-.13-.466-.292-.63-.49v2.64h-.964zm.873-4.758c0 .695.148 1.212.446 1.546.296.333.656.5 1.078.5.427 0 .795-.172 1.102-.518.304-.346.458-.88.458-1.606 0-.69-.15-1.208-.448-1.552-.298-.344-.654-.517-1.07-.517-.41 0-.772.185-1.09.55-.316.365-.475.898-.475 1.596zM99.28 31.402l.996.118c-.157.554-.448.985-.874 1.29-.424.308-.968.46-1.628.46-.834 0-1.493-.244-1.98-.732-.49-.487-.732-1.173-.732-2.055 0-.91.245-1.62.74-2.123.493-.505 1.133-.756 1.92-.756.76 0 1.38.246 1.864.74.482.494.723 1.188.723 2.083 0 .054-.003.136-.006.245H96.06c.035.596.212 1.052.53 1.368.317.316.715.475 1.19.475.353 0 .654-.09.905-.267.25-.175.448-.457.595-.846zm-3.168-1.485h3.18c-.044-.456-.165-.798-.365-1.026-.31-.353-.706-.53-1.196-.53-.442 0-.815.143-1.117.424-.302.28-.468.66-.5 1.133zM105.385 31.402l.997.118c-.157.554-.45.985-.873 1.29-.426.308-.97.46-1.63.46-.834 0-1.494-.244-1.98-.732-.488-.487-.733-1.173-.733-2.055 0-.91.248-1.62.74-2.123.493-.505 1.133-.756 1.92-.756.76 0 1.382.246 1.864.74.483.494.725 1.188.725 2.083 0 .054 0 .136-.006.245h-4.246c.036.596.213 1.052.53 1.368s.716.475 1.19.475c.354 0 .655-.09.906-.267.25-.175.448-.457.595-.846zm-3.167-1.485h3.178c-.042-.456-.163-.798-.364-1.026-.308-.353-.705-.53-1.194-.53-.442 0-.816.143-1.118.424-.303.28-.47.66-.502 1.133zM111.287 33.148v-.684c-.36.537-.892.806-1.592.806-.454 0-.873-.118-1.25-.356-.383-.24-.678-.57-.887-1-.208-.427-.313-.917-.313-1.472 0-.54.095-1.03.284-1.472.188-.44.473-.78.852-1.014.378-.235.802-.353 1.27-.353.345 0 .65.068.917.206.268.138.485.317.653.538v-2.686h.96v7.484h-.896zm-3.05-2.706c0 .695.153 1.213.46 1.558.308.345.67.516 1.09.516.42 0 .78-.164 1.073-.492.295-.328.443-.83.443-1.504 0-.742-.15-1.287-.45-1.635-.3-.347-.672-.52-1.11-.52-.428 0-.787.166-1.075.5-.287.333-.43.86-.43 1.577zM116.556 29.504c0-1.243.35-2.216 1.052-2.92.7-.7 1.604-1.053 2.712-1.053.725 0 1.38.166 1.96.495.584.332 1.027.793 1.334 1.383.305.59.457 1.26.457 2.01 0 .758-.158 1.437-.48 2.036-.323.6-.778 1.052-1.367 1.36-.59.308-1.227.462-1.908.462-.74 0-1.4-.17-1.983-.51s-1.024-.806-1.324-1.395-.452-1.21-.452-1.866zm1.07.015c0 .9.257 1.61.766 2.13.51.52 1.148.78 1.917.78.78 0 1.425-.263 1.93-.787.506-.524.76-1.268.76-2.23 0-.61-.11-1.142-.324-1.596-.217-.455-.532-.807-.95-1.057-.415-.25-.884-.376-1.4-.376-.736 0-1.37.24-1.9.723-.533.48-.8 1.286-.8 2.412zM125.517 33.148V28.44h-.85v-.714h.85v-.576c0-.365.034-.636.103-.813.094-.237.258-.43.49-.578.234-.15.562-.224.984-.224.27 0 .57.03.9.093l-.144.8c-.202-.033-.39-.05-.57-.05-.292 0-.5.058-.62.178-.122.12-.183.342-.183.67v.5h1.11v.714h-1.11v4.707h-.96zM131.467 33.148v-7.484h1.04v6.6h3.87v.885h-4.91zM137.498 26.72v-1.056h.964v1.057h-.964zm0 6.428v-5.422h.964v5.422h-.964zM140.162 33.148V28.44h-.853v-.714h.852v-.576c0-.365.034-.636.1-.813.096-.237.26-.43.49-.578.236-.15.563-.224.985-.224.27 0 .572.03.9.093l-.145.8c-.2-.033-.39-.05-.568-.05-.292 0-.5.058-.622.178-.12.12-.183.342-.183.67v.5h1.11v.714h-1.11v4.707h-.958zM146.878 31.402l.996.118c-.157.554-.448.985-.873 1.29-.424.308-.967.46-1.63.46-.832 0-1.49-.244-1.98-.732-.486-.487-.73-1.173-.73-2.055 0-.91.247-1.62.74-2.123.493-.505 1.133-.756 1.92-.756.76 0 1.382.246 1.865.74.48.494.723 1.188.723 2.083 0 .054 0 .136-.005.245h-4.245c.034.596.212 1.052.53 1.368.318.316.715.475 1.19.475.353 0 .655-.09.905-.267.25-.175.448-.457.595-.846zm-3.17-1.485h3.18c-.042-.456-.163-.798-.363-1.026-.31-.353-.705-.53-1.195-.53-.442 0-.816.143-1.118.424-.303.28-.47.66-.503 1.133z"
                    ></path>
                  </g>
                </svg> </a
            ></v-col>
            <v-col cols="12" md="2" class="ma-2">
              <a href="https://www.partnerweekly.com/" target="_blank">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                  focusable="false"
                  role="img"
                  viewBox="0 0 405.7 112"
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.4 }"
                  :delay="20"
                  :duration="200"
                >
                  <path
                    fill="#ffffff"
                    d="M60.5,54.5h6.1l10.1,27.7h-6.1l-2-6.2H58.4l-2.1,6.2h-6L60.5,54.5z M59.9,71.5h7l-3.4-10.2h-0.1L59.9,71.5z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M78.2,54.5h14.5c4.8,0,7.9,3.5,7.9,7.7c0,3.3-1.3,5.7-4.3,7v0.1c2.9,0.8,3.7,3.7,3.9,6.5  c0.1,1.7,0.1,5,1.1,6.6h-5.9c-0.7-1.7-0.6-4.4-0.9-6.6c-0.4-2.9-1.5-4.2-4.5-4.2h-5.9v10.8h-5.9V54.5z M84.1,67.1h6.5  c2.6,0,4.1-1.2,4.1-4c0-2.7-1.4-3.9-4.1-3.9h-6.5V67.1z"
                  ></path>
                  <path fill="#ffffff" d="M110,59.6h-8.1v-5.1h22.1v5.1h-8.1v22.6H110V59.6z"></path>
                  <path
                    fill="#ffffff"
                    d="M126.3,54.5h5.9l11.2,18.6h0.1V54.5h5.5v27.7h-5.9l-11.2-18.6h-0.1v18.6h-5.5V54.5z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M153.5,54.5h20.1v5.1h-14.2v6h13v4.7h-13v6.8h14.5v5.1h-20.4V54.5z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M177.1,54.5h14.5c4.8,0,7.9,3.5,7.9,7.7c0,3.3-1.3,5.7-4.3,7v0.1c2.9,0.8,3.7,3.7,3.9,6.5  c0.1,1.7,0.1,5,1.1,6.6h-5.9c-0.7-1.7-0.6-4.4-0.9-6.6c-0.4-2.9-1.5-4.2-4.5-4.2h-5.9v10.8h-5.9V54.5z M183.1,67.1h6.5  c2.6,0,4.1-1.2,4.1-4c0-2.7-1.4-3.9-4.1-3.9h-6.5V67.1z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M236.5,82.2h-7.9L222.6,57h-0.1l-6,25.2h-8l-9.5-37.1h7.9l5.7,25.2h0.1l6.3-25.2h7.4l6.1,25.6h0.1l5.9-25.6  h7.8L236.5,82.2z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M248.2,54.5h20.1v5.1h-14.2v6h13v4.7h-13v6.8h14.5v5.1h-20.4V54.5z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M271.8,54.5H292v5.1h-14.2v6h13v4.7h-13v6.8h14.5v5.1h-20.4V54.5z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M295.5,54.5h5.9V66L312,54.5h7.4l-10.5,11l11.5,16.8h-7.4l-8.1-12.5l-3.4,3.5v8.9h-5.9V54.5z"
                  ></path>
                  <path fill="#ffffff" d="M322,54.5h5.9v22.6H341v5.1h-19V54.5z"></path>
                  <path
                    fill="#ffffff"
                    d="M346.4,71.4l-9.9-16.9h6.7l6.3,11l6.3-11h6.6l-10,17.1v10.6h-5.9V71.4z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M367.7,54c0.7,0,1.4,0.2,2,0.5c0.7,0.4,1.2,0.9,1.6,1.5c0.4,0.7,0.6,1.3,0.6,2.1c0,0.7-0.2,1.4-0.5,2.1  c-0.4,0.7-0.9,1.2-1.5,1.5c-0.7,0.4-1.4,0.5-2.1,0.5c-0.7,0-1.4-0.2-2.1-0.5c-0.7-0.4-1.2-0.9-1.5-1.5c-0.4-0.7-0.5-1.3-0.5-2.1  c0-0.7,0.2-1.4,0.6-2.1c0.4-0.7,0.9-1.2,1.5-1.5C366.4,54.2,367,54,367.7,54z M367.7,54.7c-0.6,0-1.2,0.2-1.7,0.5  c-0.5,0.3-1,0.7-1.3,1.3c-0.3,0.5-0.5,1.1-0.5,1.7c0,0.6,0.2,1.2,0.5,1.7c0.3,0.5,0.7,1,1.3,1.3c0.5,0.3,1.1,0.5,1.7,0.5  c0.6,0,1.2-0.2,1.7-0.5c0.5-0.3,1-0.7,1.3-1.3c0.3-0.5,0.4-1.1,0.4-1.7c0-0.6-0.2-1.2-0.4-1.7c-0.3-0.6-0.7-1-1.3-1.3  C368.9,54.9,368.3,54.7,367.7,54.7z M365.9,60.5V56h1.5c0.5,0,0.9,0,1.2,0.1c0.2,0.1,0.4,0.2,0.5,0.4c0.1,0.2,0.2,0.4,0.2,0.6  c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.4-0.9,0.4c0.2,0.1,0.3,0.2,0.4,0.2c0.2,0.2,0.4,0.5,0.7,0.9l0.5,0.9h-0.9l-0.4-0.7  c-0.3-0.6-0.6-0.9-0.7-1.1c-0.1-0.1-0.3-0.2-0.6-0.2h-0.4v1.9H365.9z M366.6,57.9h0.9c0.4,0,0.7-0.1,0.9-0.2  c0.1-0.1,0.2-0.3,0.2-0.5c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1-0.1-0.4-0.1-0.7-0.1h-0.8V57.9z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M4.6,1.3c-0.2,0-0.3,0.2-0.3,0.4c0,0.2,0.2,0.3,0.4,0.3C6,2,7.3,2,8.7,2C23,2.2,36.4,5.2,46.5,10.3  c4.9,2.5,8.7,5.4,11.4,8.6c2.7,3.3,4.1,6.7,4.1,10.2l0,0.2c-0.1,5.2-3.6,10.5-10,14.8c-5.1,3.5-11.6,6.2-19.3,8.1  c-0.2,0-0.3,0.2-0.3,0.4c0,0.2,0.2,0.3,0.4,0.3c4.8-0.6,9.3-1.4,13.5-2.4c6.1-1.5,11.4-3.5,15.9-5.9c4.4-2.3,7.9-5,10.2-8  c2.4-3,3.7-6.1,3.7-9.4v-0.2c0-7.1-5.6-13.8-15.7-18.9c-10-5.1-23.4-8-37.6-8.2C17.6-0.1,10,0.6,4.6,1.3z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M33.2,14.2L33.2,14.2c-3.4,1.3-6.2,4-8.4,8.1c-2,3.9-3.4,8.9-3.9,14.5c-0.2,1.7-0.2,3.5-0.2,5.3  c0,9.6,2.2,20,6.2,29.1c5,11.7,12.8,21.3,22.4,27.8c0.2,0.1,0.4,0.1,0.5-0.1c0.1-0.1,0.1-0.3,0-0.5c-4.4-4.7-8.3-10.2-11.6-16.4  c-3.5-6.6-6.2-14-7.9-21.3c-1.2-5.4-1.9-10.7-1.9-15.7c0-1.5,0.1-2.9,0.2-4.3c0.5-6.2,2.1-11.3,4.7-14.9c2.4-3.3,5.5-5.3,9.3-5.8  c3.5-0.5,7.6,0.3,12.1,2.3c0.2,0.1,0.4,0,0.5-0.1c0.1-0.2,0.1-0.4-0.1-0.5C46.9,14.6,39.3,11.9,33.2,14.2z"
                  ></path>
                  <path
                    fill="#CDE2BC"
                    d="M321.5,31.4L321.5,31.4c-15.3,1.2-32.5,5.1-47.1,10.7c-0.5,0.2-0.7,0.7-0.6,1.2c0.2,0.5,0.7,0.8,1.2,0.6  c13.2-4.1,26.8-6.9,38.3-7.8c20.6-1.6,40.6-0.3,56.4,3.8c15.6,4,25.3,10.2,27.6,17.5c0.3,0.9,0.4,1.9,0.4,2.8c0,3.5-2,7-6.3,10.8  c-0.4,0.3-0.4,0.9-0.1,1.3c0.3,0.4,0.8,0.5,1.2,0.3c8.8-4.8,13.1-10,13.1-15.9c0-1.3-0.2-2.6-0.6-3.9c-2.3-7.4-12.3-13.6-28.3-17.6  C361.1,31.1,341.4,29.8,321.5,31.4z"
                  ></path>
                  <path
                    fill="#CDE2BC"
                    d="M11.7,70C3.7,74.9,0,79.7,0,85c0,1.1,0.2,2.2,0.5,3.3c2.1,7.4,12,13.9,27.8,18.3c15.6,4.3,35.1,6.2,55,5.2  c19.7-1,37-4.5,51.5-10.4c0.5-0.2,0.7-0.7,0.5-1.2c-0.2-0.5-0.7-0.7-1.2-0.6c-13.6,4.5-27.1,7-42.7,7.8c-20.5,1-40.4-0.8-56-5.3  C20,97.6,10.4,91.2,8.3,83.9C8,83,7.9,82,7.9,81.1c0-3.2,1.6-6.3,5-9.6c0.3-0.3,0.4-0.9,0.1-1.3C12.7,69.8,12.1,69.7,11.7,70z"
                  ></path>
                  <g>
                    <path fill="#ffffff" d="M165.4,96.3l-2.4,12.8h-1.6l2.4-12.8H165.4z"></path>
                    <path
                      fill="#ffffff"
                      d="M166.1,109.1l1.2-6.5c0.2-1,0.3-1.9,0.4-2.7h1.4l-0.2,1.8h0c0.8-1.3,2.1-2,3.4-2c1.1,0,2.3,0.6,2.3,2.6   c0,0.4-0.1,1-0.2,1.5l-1,5.4H172l1-5.3c0.1-0.4,0.1-0.8,0.1-1.2c0-0.9-0.4-1.6-1.4-1.6c-1.1,0-2.7,1.3-3.1,3.6l-0.8,4.5H166.1z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M176.6,109.1l1.2-6.5c0.2-1,0.3-1.9,0.4-2.7h1.4l-0.2,1.8h0c0.8-1.3,2.1-2,3.4-2c1.1,0,2.3,0.6,2.3,2.6   c0,0.4-0.1,1-0.2,1.5l-1,5.4h-1.6l1-5.3c0.1-0.4,0.1-0.8,0.1-1.2c0-0.9-0.4-1.6-1.4-1.6c-1.1,0-2.7,1.3-3.1,3.6l-0.8,4.5H176.6z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M196,103.6c0,2.8-2,5.8-5.1,5.8c-2.3,0-3.6-1.7-3.6-3.8c0-3,2.1-5.8,5.1-5.8   C194.9,99.7,196,101.6,196,103.6z M188.9,105.5c0,1.5,0.8,2.6,2.2,2.6c1.9,0,3.3-2.4,3.3-4.5c0-1.1-0.5-2.6-2.1-2.6   C190.3,101,188.9,103.4,188.9,105.5z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M199.4,99.9l0.8,5.2c0.1,1,0.2,1.7,0.3,2.3h0.1c0.2-0.5,0.4-1.1,1-2.1l2.8-5.4h1.7l-5.1,9.2h-1.6l-1.6-9.2   H199.4z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M212.1,109.1c0-0.6,0.1-1.4,0.2-2.4h0c-1,1.9-2.3,2.6-3.6,2.6c-1.6,0-2.6-1.3-2.6-3c0-3.2,2.4-6.6,6.4-6.6   c0.9,0,1.8,0.2,2.5,0.4l-0.9,4.8c-0.3,1.6-0.4,3.2-0.4,4.3H212.1z M213.2,101.1c-0.2-0.1-0.6-0.1-1.1-0.1c-2.4,0-4.3,2.5-4.3,5   c0,1,0.4,2,1.6,2c1.3,0,2.9-1.7,3.3-4.2L213.2,101.1z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M220.4,97.7l-0.4,2.2h2.2l-0.2,1.2h-2.2l-0.9,4.5c-0.1,0.5-0.2,1-0.2,1.5c0,0.6,0.3,0.9,0.9,0.9   c0.3,0,0.5,0,0.7-0.1l-0.1,1.3c-0.3,0.1-0.8,0.2-1.2,0.2c-1.4,0-1.9-0.9-1.9-1.8c0-0.5,0.1-1.1,0.2-1.7l0.9-4.7h-1.3l0.2-1.2h1.3   l0.3-1.7L220.4,97.7z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M229.2,108.6c-0.7,0.4-1.8,0.7-3,0.7c-2.4,0-3.5-1.7-3.5-3.7c0-2.8,2.1-5.9,5-5.9c1.7,0,2.7,1,2.7,2.4   c0,2.4-2.7,3.1-6.1,3c-0.1,0.4,0,1.3,0.2,1.7c0.4,0.8,1.1,1.2,2.1,1.2c1.1,0,1.9-0.3,2.5-0.6L229.2,108.6z M228.9,102.1   c0-0.7-0.6-1.2-1.4-1.2c-1.5,0-2.6,1.5-3,2.9C226.9,103.9,228.9,103.6,228.9,102.1L228.9,102.1z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M232.2,109.4c-0.6,0-1-0.5-1-1.1c0-0.7,0.5-1.3,1.2-1.3c0.6,0,1.1,0.5,1.1,1.1   C233.5,108.8,233,109.4,232.2,109.4L232.2,109.4z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M242,96.5c0.7-0.2,1.7-0.3,2.8-0.3c1.2,0,2.4,0.3,3.1,1c0.6,0.6,0.9,1.3,0.9,2.3c0,1.4-0.7,2.6-1.5,3.3   c-1,0.8-2.4,1.2-3.9,1.2c-0.5,0-0.9,0-1.3-0.1l-1,5.1h-1.6L242,96.5z M242.4,102.7c0.5,0.1,0.8,0.1,1.3,0.1c2.2,0,3.6-1.3,3.6-3.2   c0-1.5-1.1-2.1-2.5-2.1c-0.6,0-1.1,0.1-1.4,0.1L242.4,102.7z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M255.9,108.6c-0.7,0.4-1.8,0.7-3,0.7c-2.4,0-3.5-1.7-3.5-3.7c0-2.8,2.1-5.9,5-5.9c1.7,0,2.7,1,2.7,2.4   c0,2.4-2.7,3.1-6.1,3c-0.1,0.4,0,1.3,0.2,1.7c0.4,0.8,1.1,1.2,2.1,1.2c1.1,0,1.9-0.3,2.5-0.6L255.9,108.6z M255.5,102.1   c0-0.7-0.6-1.2-1.4-1.2c-1.5,0-2.6,1.5-3,2.9C253.6,103.9,255.5,103.6,255.5,102.1L255.5,102.1z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M258.2,109.1l1.1-5.9c0.2-1.2,0.4-2.4,0.5-3.3h1.4c-0.1,0.6-0.2,1.3-0.2,2h0.1c0.6-1.3,1.6-2.2,2.8-2.2   c0.1,0,0.3,0,0.4,0l-0.3,1.6c-0.1,0-0.2,0-0.4,0c-1.4,0-2.6,1.7-3,3.8l-0.8,4H258.2z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M265.3,109.1l1.5-7.9h-1.2l0.2-1.3h1.2l0.1-0.5c0.2-1.3,0.7-2.5,1.5-3.2c0.6-0.5,1.4-0.8,2.2-0.8   c0.6,0,1,0.1,1.3,0.2l-0.3,1.3c-0.2-0.1-0.6-0.2-0.9-0.2c-1.3,0-1.9,1.2-2.1,2.7l-0.1,0.4h2.1l-0.2,1.3h-2l-1.5,7.9H265.3z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M279.6,103.6c0,2.8-2,5.8-5.1,5.8c-2.3,0-3.6-1.7-3.6-3.8c0-3,2.1-5.8,5.1-5.8   C278.5,99.7,279.6,101.6,279.6,103.6z M272.6,105.5c0,1.5,0.8,2.6,2.2,2.6c1.9,0,3.3-2.4,3.3-4.5c0-1.1-0.5-2.6-2.1-2.6   C273.9,101,272.6,103.4,272.6,105.5z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M281.1,109.1l1.1-5.9c0.2-1.2,0.4-2.4,0.5-3.3h1.4c-0.1,0.6-0.2,1.3-0.2,2h0.1c0.6-1.3,1.6-2.2,2.8-2.2   c0.1,0,0.3,0,0.4,0l-0.3,1.6c-0.1,0-0.2,0-0.4,0c-1.4,0-2.6,1.7-3,3.8l-0.8,4H281.1z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M287.5,109.1l1.2-6.5c0.2-1,0.3-1.9,0.4-2.7h1.4l-0.2,1.7h0.1c0.9-1.3,2-1.9,3.2-1.9c1.4,0,2.1,0.9,2.1,2.1   c0.8-1.3,2-2,3.4-2.1c1.1,0,2.2,0.7,2.2,2.4c0,0.4-0.1,1-0.2,1.6l-1,5.4h-1.5l1-5.3c0.1-0.3,0.1-0.8,0.1-1.2c0-1-0.4-1.6-1.4-1.6   c-1.1,0-2.5,1.3-2.9,3.4l-0.9,4.7h-1.5l1-5.4c0.1-0.4,0.1-0.8,0.1-1.1c0-0.8-0.2-1.6-1.4-1.6c-1.2,0-2.6,1.5-2.9,3.5l-0.9,4.6   H287.5z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M304.2,109.4c-0.6,0-1-0.5-1-1.1c0-0.7,0.5-1.3,1.2-1.3c0.6,0,1.1,0.5,1.1,1.1   C305.4,108.8,304.9,109.4,304.2,109.4L304.2,109.4z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M314,96.5c0.7-0.2,1.7-0.3,2.8-0.3c1.2,0,2.4,0.3,3.1,1c0.6,0.6,0.9,1.3,0.9,2.3c0,1.4-0.7,2.6-1.5,3.3   c-1,0.8-2.4,1.2-3.9,1.2c-0.5,0-0.9,0-1.3-0.1l-1,5.1h-1.6L314,96.5z M314.3,102.7c0.5,0.1,0.8,0.1,1.3,0.1c2.2,0,3.6-1.3,3.6-3.2   c0-1.5-1.1-2.1-2.5-2.1c-0.6,0-1.1,0.1-1.4,0.1L314.3,102.7z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M321.3,109.1l1.1-5.9c0.2-1.2,0.4-2.4,0.5-3.3h1.4c-0.1,0.6-0.2,1.3-0.2,2h0.1c0.6-1.3,1.6-2.2,2.8-2.2   c0.1,0,0.3,0,0.4,0l-0.3,1.6c-0.1,0-0.2,0-0.4,0c-1.4,0-2.6,1.7-3,3.8l-0.8,4H321.3z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M336.4,103.6c0,2.8-2,5.8-5.1,5.8c-2.3,0-3.6-1.7-3.6-3.8c0-3,2.1-5.8,5.1-5.8   C335.3,99.7,336.4,101.6,336.4,103.6z M329.4,105.5c0,1.5,0.8,2.6,2.2,2.6c1.9,0,3.3-2.4,3.3-4.5c0-1.1-0.5-2.6-2.1-2.6   C330.7,101,329.3,103.4,329.4,105.5z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M338.1,109.1l1.5-7.9h-1.2l0.2-1.3h1.2l0.1-0.5c0.5-2.5,2-4,4.4-4c0.9,0,1.7,0.2,2.1,0.5l-0.5,1.3   c-0.4-0.2-1.1-0.4-1.8-0.4c-1.7,0-2.4,1.3-2.6,2.8l-0.1,0.4h4.9l-1.7,9.2H343l1.5-7.9h-3.4l-1.5,7.9H338.1z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M351.8,97.7l-0.4,2.2h2.2l-0.2,1.2h-2.2l-0.9,4.5c-0.1,0.5-0.2,1-0.2,1.5c0,0.6,0.3,0.9,0.9,0.9   c0.3,0,0.5,0,0.7-0.1l-0.1,1.3c-0.3,0.1-0.8,0.2-1.2,0.2c-1.4,0-1.9-0.9-1.9-1.8c0-0.5,0.1-1.1,0.2-1.7l0.9-4.7h-1.3l0.2-1.2h1.3   l0.3-1.7L351.8,97.7z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M355,109.4c-0.6,0-1-0.5-1-1.1c0-0.7,0.5-1.3,1.2-1.3c0.6,0,1.1,0.5,1.1,1.1   C356.2,108.8,355.7,109.4,355,109.4L355,109.4z"
                    ></path>
                  </g>
                  <title>PartnerWeekly</title>
                </svg>
              </a></v-col
            >
          </v-row>
        </v-sheet>

        <v-sheet>
          <div>
            <h2 class="font-extralight text-3xl">Employment History</h2>
            <div class="underline"></div>
            <EventTimeline :timeline="timeline" :side="smAndDown ? 'end' : 'alternate'" />
          </div>
        </v-sheet>

        <v-sheet>
          <div>
            <h2 class="font-extralight text-3xl">Shout outs</h2>
            <div class="underline"></div>

            <v-row align="stretch">
              <v-col cols="12" md="4">
                <v-card
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.02 }"
                  :delay="20"
                  :duration="200"
                  class="d-flex flex-column fill-height"
                  title="Paul Connell"
                  subtitle="General Manager - Naked Wines"
                  text='"Great human and true culture add in terms of the positivity, can do and fun he brings to the team."'
                  variant="outlined"
                >
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.02 }"
                  :delay="20"
                  :duration="200"
                  class="d-flex flex-column fill-height"
                  title="Luke Kohler"
                  subtitle="Director of
            Product - Naked Wines"
                  text='"He is a true pleasure to work with and will be a great addition and a great fit for any team he joins."'
                  variant="outlined"
                >
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card
                  v-motion
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.02 }"
                  :delay="20"
                  :duration="200"
                  class="d-flex flex-column fill-height"
                  title="Elaine Chen"
                  subtitle="Designer - Naked Wines"
                  text='"Larry was a great mentor and taught me a lot of front end processes throughout our time working together, and had great technical knowledge which was backed by a great attitude and passion for his work"'
                  variant="outlined"
                >
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-sheet>

        <v-sheet>
          <div>
            <h2 class="font-extralight text-3xl" v-motion-pop-visible-once>
              Let's create something amazing together!
            </h2>
            <div class="underline"></div>
            <p>
              In the meantime, I'd love to connect with you! Feel free to reach out via
              <a href="https://www.linkedin.com/in/larryshawn/" target="_blank">Linked in</a> I'm
              always excited to discuss potential collaborations, share insights, or simply chat
              about the ever-evolving world of web development.
            </p>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.home-bg {
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-image: url('../assets/fe-dev.jpeg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align content to the right */
}
.jumbo {
  font-size: 4rem;
}

@media (max-width: 768px) {
  .home-bg {
    justify-content: center; /* Center content horizontally on mobile */
    background-position: center 40px;
  }
}

.v-sheet.v-theme--dark.main-bg {
  background: linear-gradient(to bottom, #00031c 40%, #010003 50%);
  color: white;
}

.fill-height {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logo {
  width: 100%;
}
.theme-bg {
  background-color: #3f51b5;
  /* background: linear-gradient(to bottom, #00031c 40%, #010003 50%); */
  padding: 20px;
  margin: 4px;
}
.scroll-container {
  display: flex;
  overflow-x: auto; /* Enables horizontal scrolling */
  padding: 1rem;
  white-space: nowrap; /* Prevents line breaks, ensuring cards stay on one line */
}

.flex-nowrap {
  flex-wrap: nowrap; /* Keeps cards in a single row */
}

.card-column {
  min-width: 309px; /* Ensures a consistent card width */
  margin-right: 1rem; /* Adds space between cards */
}

img.v-img__img.v-img__img--contain {
  object-fit: none !important; /* Prevents the image from scaling to fit */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Ensures the image doesn’t tile */
}

.underline {
  width: 70px;
  height: 3px;
  background: #333;
  margin: 0 0 40px;
}

.v-divider.v-theme--light {
  border-color: #333;
}

.v-card.v-theme--light {
  border-color: #cecdcd;
}
</style>
