<script setup>
const openMaps = () => {
    const url = 'https://www.google.com/maps/place/Anthony+M+Coiffure/@50.6674702,3.0735449,18.25z/data=!4m6!3m5!1s0x47c32a465fc5db4b:0x9264e9f68bc2318e!8m2!3d50.6676098!4d3.0740403!16s%2Fg%2F11bw3ccn32?entry=ttu'
    window.open(url, '_blank');
}
</script>

<template>
    <div>
<h2>Vous souhaitez vous rendre au salon?</h2>
<p>Adresse:</p>
<button @click="openMaps">40 rue Jules Guesdes, 59700 Marcq-en-Baroeul</button>
</div>
</template>

<style scoped>

div{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

button{
    background-color: var(--background-color);
    border: 0.2rem solid var(--textcolor);
    border-radius: 1rem;
    color: var(--textcolor);
    padding: 15px 32px;
    text-align: center;
    font-size: 1rem;
    margin: 4px 2px;
    width: 70%;
}

@media screen and (min-width: 1024px) {

button{
    transition: all 0.3s ease 0s;
}


button:hover{
    border: 0.2rem solid var(--titleColor);
    scale: 1.1;
    background-color: var(--titleColor);
    cursor: pointer;
    color: var(--background);

}

}
</style>