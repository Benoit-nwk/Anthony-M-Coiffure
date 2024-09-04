<script setup>
import MainNav from '@/components/home/MainNav.vue';
import ButtonBack from '@/components/ButtonBack.vue';
</script>


<template>
    <MainNav/>
    <h2>Prestations Hommes (Rituel relaxant inclus*)</h2>

    <table>
        <tr>
            <th>Prestation</th>
            <th>Tarif</th>
        </tr>

        <tr>
            <td>Coupe coiffage + Barbe</td>
            <td>25€</td>
        </tr>

        <tr>
            <td>Coupe coiffage + Coloration</td>
            <td>37€</td>
        </tr>

        <tr>
            <td>Coupe coiffage + Permanente</td>
            <td>57€</td>
        </tr>

        <tr>
            <td>Coupe Brushing + Décoloration</td>
            <td>72€</td>
        </tr>

        <tr>
            <td>Coupe coiffage + Décoloration + Bain de lumière</td>
            <td>55€</td>
        </tr>

        <tr>
            <td>Barbe</td>
            <td>50€</td>
        </tr>

    </table>
    <ButtonBack/>
</template>


<style scoped>
h2{
    text-align: center;
    margin: 3rem 0 3rem 0;
}
</style>