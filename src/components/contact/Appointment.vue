<script setup>
const phoneNumber = '09.86.23.47.59'
</script>

<template>
    <div>
<h2>Une prise de rendez vous?</h2>
<p>Numéro de téléphone:</p>
<button><a :href="`tel:${phoneNumber}`">{{phoneNumber}}</a></button>
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

a{
    text-decoration: none;
    color: var(--textcolor);
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
    >a{
        color: var(--background);
    }
}
}
</style>