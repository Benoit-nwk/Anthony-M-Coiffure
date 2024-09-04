<script setup>

</script>

<template>
    <div>
        <h2>Rejoignez nous sur les réseaux!</h2>
    </div>

    <div class="socials">
<div>
    <p>Facebook</p>
    <a href="https://www.facebook.com/anthonymcoiffure/" target="_blank">
    <img src="../../assets/img/logo_facebook.png" alt="logoFacebook"></a>
</div>

<div>
    <p>Instagram</p>
    <a href="https://www.instagram.com/anthonym.coiffure/" target="_blank">
    <img src="../../assets/img/logo_intagram.png" alt="logoInstagram">
    </a>
</div>
</div>
</template>

<style scoped>

.socials{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 2rem
}

div{

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

    h2{
        margin-top: 5rem;
    
    }

    a{
        transition: all 0.3s ease 0s;
    }

    a:hover{
        scale: 1.3;
    }
}
</style>