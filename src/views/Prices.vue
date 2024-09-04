<script setup>

import MainNav from "../components/home/MainNav.vue"
import GeneralPrices from "../components/prices/GeneralPrices.vue"

</script>

<template>
<MainNav></MainNav>
<div class="paragraph">
<p>Dans un cadre chaleureux et une ambiance détendue vous bénéficiez chez Anthony M. Coiffure de prestations variées et personnalisées pour lesquelles des tarifs compétitifs et abordables sont garantis.</p>
</div>
<GeneralPrices></GeneralPrices>
</template>

<style scoped> 

.paragraph{
    margin: 1.8rem 1.8rem 0 1.8rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (min-width: 1024px) {

    .paragraph{
        margin: 5rem 0 5rem 0;
    }
}

</style>