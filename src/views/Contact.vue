<script setup>
import MainNav from "../components/home/MainNav.vue"
import Appointment from "../components/contact/Appointment.vue"
import Adress from "../components/contact/Adress.vue"
import Suggestion from "../components/contact/Suggestion.vue"
import Socials from "../components/contact/Socials.vue"
</script>

<template>

<MainNav></MainNav>
  <div class="container">
    <div class="imageContainer">
      <img src="../assets/img/Home_img.jpg" alt="HomeImg">
    </div>
    <div class="componentsContainer">
      <Appointment></Appointment>
      <Adress></Adress>
      <Suggestion></Suggestion>
    </div>
  </div>
  <Socials></Socials>
</template>

<style scoped> 
img{
    width: 100%;
}

p{
    text-align: center;
}

@media screen and (min-width: 1024px) {
    
.container {
    display: flex;
    flex-direction: row;
}

.imageContainer {
    flex: 1;
    max-width: 50%;
}

.componentsContainer {
  flex: 1;
  padding-left: 20px; 
}

img {
    width: 100%;
    height: auto;
    border-radius: 0 2rem 2rem 0;
}
    
}
</style>