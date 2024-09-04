<script setup>

</script>

<template>
    <div class="grid">
    <img src="../../assets/img/Saloon03.jpg" alt="cabin_image">
    <div class="title" id="schedules">
        <h2>Horaires du salon</h2>


    <div class="tableOfShedules">
        <p>Lundi</p>
        <p class="line">----</p>
        <p>Fermé</p>
        <p>Mardi</p>
        <p class="line">----</p>
        <p>9h00 - 18h00</p>
        <p>Mercredi</p>
        <p class="line">----</p>
        <p>9h00 - 17h00</p>
        <p>Jeudi</p>
        <p class="line">----</p>
        <p>9h00 - 18h00</p>
        <p>Vendredi</p>
        <p class="line">----</p>
        <p>9h00 - 18h00</p>
        <p>Samedi</p>
        <p class="line">----</p>
        <p>9h00 - 17h00</p>
        <p>Dimanche</p>
        <p class="line">----</p>
        <p>Fermé</p>
    </div>
</div>
</div>
</template>

<style scoped> 

.title{
    margin-top: 3.12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tableOfShedules{
    margin: 2.3rem 1rem 2.3rem 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
    align-items: center;
}

.tableOfShedules>p{
    font-size: 1rem;
    text-align: center;
}

img{
    display: none;
}

@media screen and (min-width: 1024px) {

    .title{
        margin-top: 5rem;
    }

    .tableOfShedules>p{
        font-size: 1.2rem;
    }

    img{
        display: block;
        width: 100%;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        justify-content: center;
        align-items: center;
        margin-bottom: 5rem;
    }

    .grid>img{
        width: 90%;
        border-radius: 0 2rem 2rem 0;
        display: block;
    }
}
</style>