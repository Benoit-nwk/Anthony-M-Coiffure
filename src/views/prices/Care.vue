<script setup>
import MainNav from '@/components/home/MainNav.vue';
import ButtonBack from '@/components/ButtonBack.vue';
</script>


<template>
    <MainNav/>
    <h2>Soins</h2>

    <table>
        <tr>
            <th>Type de Soin</th>
            <th>Tarif</th>
        </tr>

        <tr>
            <td>Rituel relaxant</td>
            <td>5€</td>
        </tr>

        <tr>
            <td>Soin sauna</td>
            <td>7€</td>
        </tr>


        <tr>
            <td>Soin nourissant</td>
            <td>5€</td>
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