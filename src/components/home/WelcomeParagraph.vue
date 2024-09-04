<script setup>
import SecondaryNav from "../home/SecondaryNav.vue"
</script>

<template>
    <div class="grid">
        <img src="../../assets/img/Saloon_img.jpg" alt="salon">
        <div class="title" id="welcome">
            
            <SecondaryNav class="secondaryNav"></SecondaryNav>
            <h2>Anthony M. vous souhaite la bienvenue!</h2>
            <h3>L’endroit idéal pour prendre soin de vos cheveux.</h3>

        <div class="paragraph">
            <p>Depuis ses débuts en 2015, Anthony M. Coiffure est ravi de proposer ses services aux clients de Marcq-En-Barœul et plus généralement de la Région Hauts-de-France.</p>
            <p>Nous nous engageons à fournir des produits et des services de qualité afin de satisfaire pleinement la clientèle.</p>
            <p>Avec notre concept bien-être, nous avons acquis une certaine réputation grâce aux relations que nous avons développées avec nos clients au fil des années.</p>
            <p>Vous méritez les meilleurs services, et nous avons décidé d'en faire notre mission : accueil personnalisé, diagnostic, détente en cabines de soins individuelles, fauteuil massant, rituel relaxant, hygiène... Quant à vos cheveux ils seront travaillés et sculptés en fonction de leur nature pour en sublimer leur beauté.</p>
            <p>Grâce à vous, à votre fidélité et vos partages, le salon Anthony M. Coiffure reçoit la récompense des meilleurs coiffeurs de la Région depuis ses débuts.</p>
            <p>Parcourez notre site pour découvrir nos services. En cas de questions, n'hésitez pas à nous contacter.</p>
        </div>
        </div>
    </div>



    
</template>

<style scoped> 


img{
  width: 100%;
}

.title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.paragraph{
    margin: 0 2.8rem 0 2.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media screen and (min-width: 1024px) {

img{
    width: 90%;
    border-radius: 0 2rem 2rem 0;
}

    .secondaryNav{
        display: none;
    }

    .paragraph{
        height: auto;
        margin: 0 5rem 0 5rem;
    }

    .grid{
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        justify-content: center;
        align-items: center;
    }
}

</style>