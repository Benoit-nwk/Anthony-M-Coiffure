<script setup>
import router from '@/router';
</script>

<template>
        <div class="buttonBack">
<button @click="router.push('/prices')">Retour</button>
</div>
</template>



<style scoped>

button{
    background-color: var(--background-color);
    border: 0.2rem solid var(--titleColor);
    border-radius: 1rem;
    color: var(--titleColor);
    text-align: center;
    font-size: 1rem;
    font-family: var(--paragraphFont);
    padding: 0.5rem;
    cursor: pointer;
    width: 20rem;
}

.buttonBack{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 2rem 0;

}


@media screen and (min-width: 1024px) {

button{
    margin: 5rem 0 5rem 0;
    transition: all 0.3s ease;
}

button:hover{
    transform: scale(1.1);
    cursor: pointer;
    background-color: var(--titleColor);
    color: var(--background);
}
}
</style>