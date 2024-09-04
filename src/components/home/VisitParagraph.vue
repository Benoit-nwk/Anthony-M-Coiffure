<script setup>

</script>

<template>
    <div class="grid">
    <div class="title" id="visit">
        <h2>Comment se passe votre visite au salon?</h2>

 
    <div class="paragraph">
        <p>Vous bénéficiez d'abord d’un accueil personnalisé afin d'établir un diagnostic précis de l’état de vos cheveux et de votre cuir chevelu.</p>
        <p>Ensuite, vous passez en cabine individuelle. Vous prenez place dans un fauteuil massant pour une séance de relaxation et profitez d'un modelage mécanique shiatsu aux bienfaits revitalisants.</p>
        <p>Le shampooing chez Anthony M. est remplacé par un rituel relaxant.</p>
        <p>Le massage du cuir chevelu favorise l'équilibre de vos cheveux et vous apporte un maximum de détente.</p>
        <p>Votre spécialiste capillaire sera attentif à la nature de vos cheveux et vous proposera les soins appropriés.</p>
        <p>Vos cheveux seront ensuite travaillés et sculptés en fonction de leur nature pour en sublimer leur beauté.</p>
    </div>
</div>
    <img src="../../assets/img/Saloon02.jpg" alt="salon">
    </div>
</template>

<style scoped> 
.title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.paragraph{
    margin: 0 2.8rem 0 2.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img{
    display: none;
}
@media screen and (min-width: 1024px) {

    .secondaryNav{
        display: none;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        justify-content: center;
        align-items: center;
    }

    .grid>img{
        width: 90%;
        border-radius: 2rem 0 0 2rem;
        display: block;
        justify-self: end;
    }
}

</style>