<script setup>
import { ref } from 'vue';
const showMenu = ref(false);
</script>

<template>
  <!-- Header -->
    <div class="title">
        <button @click="showMenu = true"><img src="../../assets/img/Burger.png" alt="burger"></button>
        <h1>Anthony M. Coiffure</h1>
    </div>

<hr>
<!-- Menu -->
<transition name="slide">
<div v-if="showMenu" class="menu">
<button @click="showMenu=false"><img src="../../assets/img/Cross.png" alt="cross"></button>

<!-- Routes du menu -->
<div class="menuRoutes">
    <router-link to="/concept">Le concept</router-link>
    <router-link to="/achievements">Nos réalisations</router-link>
    <router-link to="/saloon">Le salon</router-link>
    <router-link to="/contact">Prendre rendez-vous</router-link>
</div>
</div>
</transition>

<!-- Routes de la nav -->
<nav id="main">
    <router-link to="/">Accueil</router-link>
    <router-link to="/prices">Tarifs</router-link>
    <router-link to="/contact">Contact</router-link>
</nav>


</template>

<style scoped>

/* Style du menu */
.menuRoutes>a{
    font-size: 1rem;
    text-decoration: none;
    color: var(--text);
    font-family: var(--paragraphFont);
}

.menuRoutes>a:not(.router-link-active){
    text-decoration: none;
}

.menuRoutes>a.router-link-active{
    color: var(--titleColor);
    text-decoration: underline;
}

.menuRoutes{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0 2rem 0;
    padding: 0 2rem 0 2rem;
}

.menu{
    position: fixed;
    top: 0;
    left: 0;
    width: 75%;
    height: 100%;
    background-color: var(--background);
    z-index: 100;
}


button{
    width: 3rem;
    height: 3rem;
    background-color: var(--background);
    border: 0.2rem solid white;
    border-radius: 1rem;margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title{
  display: flex;
    justify-content: center;
    align-items: center; /* Center the content horizontally */
    position: relative; /* Needed for absolute positioning of the button */
    width: 100%;
}

.title button {
    position: absolute;
    left: 0; /* Position the button at the start (left) of the .title container */
}


nav{
    margin: 2rem 0 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

@media screen and (min-width: 1024px) {

  nav{
    margin: 3rem 0 5rem 0;
}

.menu{
    width: 25%;
}

.menuRoutes>a{
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--text);
    font-family: var(--paragraphFont);
}

}
/* Animation du menu */

.slide-enter-active {
  transition: all .3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-active {
  transition: all .3s ease;
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}

</style>