<script setup>
import MainNav from '../components/home/MainNav.vue'
import { onMounted } from 'vue'

onMounted(() => {
    const video = document.querySelector('video')
    video.play()
    video.addEventListener('ended', function() {
        video.load()
        video.play()
    })
})

</script>

<template>
<MainNav></MainNav>
<h2>Présentation du salon</h2>
<div class="video">
<video controls muted>
        <source src="../assets/vids/videoSaloon.mp4" type="video/mp4">
        Votre navigateur ne supporte pas les vidéos HTML5.
    </video>
</div>
<p>Envie de vous faire soigner vos cheveux et prendre rendez vous? <a href="/contact">Cliquez ici</a></p>
</template>

<style scoped>

.video {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

}

.video > video {
    max-width: 90%;
    border-radius: 1rem;
}

p{
    text-align: center;
}

a{
    color: var(--titleColor);
}

h2{
    text-align: center;
    margin-top: 2rem;
    color: var(--titleColor);
}

@media screen and (min-width: 1024px) {
    .video > video {
        width: 45%;
    }
}
</style>