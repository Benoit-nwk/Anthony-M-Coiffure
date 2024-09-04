<script setup>
import router from '@/router';
</script>

<template>
<div class="cardsOfPrices">
    <button @click="router.push('/womanPrices')"><div class="woman-button"><span>Femmes</span></div></button>
    <button @click="router.push('/menPrices')"><div class="men-button"><span>Hommes</span></div></button>
    <button @click="router.push('/kidPrices')"><div class="kid-button"><span>Enfants</span></div></button>
    <button @click="router.push('/carePrices')"><div class="care-button"><span>Soins</span></div></button>
</div>
</template>

<style scoped> 
.cardsOfPrices{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem 0 2rem 0;
}

button{
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.woman-button, .men-button, .kid-button, .care-button{
    width: 18rem;
    height: 7rem;
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
}

.woman-button{
    background-image: url('../../assets/img/prices/Woman.jpg');
}

.men-button{
    background-image: url('../../assets/img/prices/Men.jpg');
}

.kid-button{
    background-image: url('../../assets/img/prices/Kid.jpg');
}

.care-button{
    background-image: url('../../assets/img/prices/Care.jpg');
}

span{
    font-family: var(--importantFont);
    font-size: 3rem;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
}


@media screen and (min-width: 1024px) {

    .cardsOfPrices{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .woman-button, .men-button, .kid-button, .care-button{
    width: 25rem;
    height: 20rem;
    background-size: cover;
    background-position: center;
    border-radius: 1rem;

}

span{
    font-size: 6rem;
}

button{
    transition: transform 0.3s ease;
}

button:hover{
    transform: scale(1.1);
}


}
</style>