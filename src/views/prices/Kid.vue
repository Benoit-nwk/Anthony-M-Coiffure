<script setup>
import MainNav from '@/components/home/MainNav.vue';
import ButtonBack from '@/components/ButtonBack.vue';
</script>


<template>
    <MainNav/>
    <h2>Prestations Enfants</h2>
    <table>
        <tr>
            <th>Prestation</th>
            <th>0 à 3 ans</th>
            <th>4 à 10 ans</th>
            <th>11 à 16 ans</th>
        </tr>

        <tr>
            <td>Brushing</td>
            <td>27€</td>
            <td>31€</td>
            <td>35€</td>
        </tr>

        <tr>
            <td>Coupe Brushing</td>
            <td>37€</td>
            <td>41€</td>
            <td>45€</td>
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