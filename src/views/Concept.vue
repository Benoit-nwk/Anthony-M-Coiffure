<script setup>
import MainNav from "../components/home/MainNav.vue"

const paragraphs = [
    { id: 1, title: "Le bien être", text: "Venez vivre une expérience sensorielle unique dans une atmosphère de bien-être bénéfique pour révéler toute la beauté de vos cheveux.<br><br> Installez vous sur du mobilier confortable et élégant aux origines Italiennes.<br><br> Profitez d'un cadre professionnel et bénéficiez lors de votre passage en cabine de soins individuels puis d'un rituel relaxant qui favorise l'équilibre des cheveux et apporte un maximum de détente. <br><br> Vous prendrez place dans un fauteuil massant et profiterez d'une musique douce propice à la détente.​Laissez vous guider, votre bien-être et votre beauté sont ma priorité."},
    { id: 2, title: "L'acceuil", text: "Nous portons une attention toute particulière au bien-être de notre clientèle. <br><br> Votre satisfaction est notre récompense. Dans cette optique nous nous engageons à vous apporter tout notre professionnalisme.<br><br>Pendant votre prestation, ou pour vous faire patienter, nous vous offrons une petite pause gourmande (thé, café ou eau et petite douceur sucrée) afin de rendre votre passage au salon le plus agréable possible.<br><br>Bénéficiez d'un accueil chaleureux et personnalisé afin d'établir un diagnostic précis de l'état de votre cuir chevelu." },
    { id: 3, title: "Les soins", text: "Le soin au salon est un service important car tout se construit autour d'un cheveu sain.<br><br>Pour avoir une belle coupe et une belle couleur, il faut avoir de beaux cheveux !<br><br>Le rituel relaxant fait partie du protocole pour y parvenir mais il existe également des soins complémentaires en fonction de vos besoins, accessibles et aux vertus réparatrices.<br><br>Donnez force et brillance à vos cheveux avec les rituels de soins. " },
    { id: 4, title: "La coupe", text: "C’est l’identité d’une personne, sa signature.<br><br>Suivez les conseils de votre spécialiste capillaire et adoptez une coupe qui sublimera l'ovale de votre visage.<br><br>À chaque type de cheveux, à chaque forme de visage et en fonction de ses habitudes, sa coupe idéale.<br><br>Optez pour une coupe facile à vivre ou un peu plus travaillée.<br><br>Et bien sûr, on détermine sa coupe selon ses goûts et sa personnalité !<br><br> Votre coiffeur sera toujours à votre écoute et saura vous conseiller." },
    { id: 5, title: "La couleur", text: "Misez sur les couleurs naturelles pour ne jamais être déçu !<br><br>Toutes les colorations sont possibles au salon à condition que cela soit en accord avec votre personnalité, vos envies et notre philosophie : la couleur doit convenir à votre teint.<br><br>Qu’elle soit uniforme ou méchée, classique ou légèrement originale, nous mettrons tout en œuvre pour que votre couleur soit parfaite, brillante, naturelle ou audacieuse.<br><br>Nous utilisons des produits de qualité pour un résultat optimum.<br><br>Expert en colorimétrie, je vous accompagne dans le choix de la couleur, celle qui saura illuminer votre visage et mettre en valeur vos atouts." },
    { id: 6, title: "Les produits", text: "Pour respecter vos cheveux et pour un résultat optimal et longue durée, nous utilisons des produits de qualité.<br><br>Les produits que nous utilisons en cabine et en salon pour réaliser les soins et les  prestations sont ceux que nous vous proposons en conseils et vente.<br><br>Dans l'espace attente, les différentes revues sont renouvelées régulièrement et sont  adaptées à l’ensemble de la clientèle." },
    { id: 7, title: "L'hygiène", text: "Désinfections des postes, des outils et instruments pour limiter les risques infectieux.<br><br>Peignoirs et serviettes toujours irréprochables, immédiatement mis au lavage après utilisation.<br><br>Les locaux, sanitaires et surfaces sont nettoyés et assainies quotidiennement pour assurer la sécurité des salariés et des clients." },
    { id: 8, title: "Le relooking", text: "Si vous n'avez aucune idée de la coupe ou de la couleur que vous souhaitez faire, nous mettrons tout en œuvre pour réaliser une transformation personnalisée, unique, qui sera le reflet de votre identité !<br><br>Chaque détail compte : votre style, votre mode de vie, vos habitudes, et bien sûr l'ovale de votre visage et votre morphologie." },
];


</script>

<template>
<header>
<MainNav></MainNav>
</header>
<h2>Le concept en 8 points</h2>
<div class="gridOfCards">
<div class="card" v-for="paragraph in paragraphs" :key="paragraph.id">
    <h3>{{paragraph.id}}. {{paragraph.title}}</h3>
    <p v-html="paragraph.text"></p>
</div>

</div>
</template>

<style scoped> 

.gridOfCards{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 0.5fr);
    gap: 2rem;
    margin-bottom: 2rem;
}

.card{
padding: 1rem;
border: 0.1rem solid var(--textcolor);
border-radius: 1rem;
height: 95%;
}

h2{
    font-size: 1.5rem;
    font-family: var(--paragraphFont);
    text-align: center;
    margin-top: 1rem;
}

h3{
    font-size: 2rem;
    font-family: var(--importantFont);
    text-align: center;
}

p{
    font-size: 0.8rem;
    font-family: var(--paragraphFont);
    text-align: center;
    padding: 0.2rem;
}

@media screen and (min-width: 1024px) {

    .gridOfCards{
        margin: 3rem;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 0.5fr);
        gap: 4rem;
    }

    .card{
        height: 100%;
    }

    p{
    font-size: 1rem;
    font-family: var(--paragraphFont);
    text-align: center;
    padding: 0.2rem;
}

h3{
    font-size: 3rem;
    font-family: var(--importantFont);
    text-align: center;
}
}
</style>