<script setup>
const openMailbox = () => {
      const email = 'contact@anthonymcoiffure.fr';
      const url = `mailto:${email}`;
      window.location.href = url;
    }
</script>

<template>
    <div>
<h2>Une question, une suggestion?</h2>
<p>Adresse mail de contact:</p>
<button @click="openMailbox">contact@anthonymcoiffure.fr</button>
</div>
</template>

<style scoped>

div{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
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