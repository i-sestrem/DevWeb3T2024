<script setup>
import { defineProps, onMounted } from 'vue';
import { useMovieStore } from '@/stores/movie';
import HeaderVue from '@/components/HeaderVue.vue';
const movieStore = useMovieStore();

const props = defineProps({
    movieId: {
        type: Number,
        required: true,
    },
});

onMounted(async () => {
    await movieStore.getMovieDetail(props.movieId);
});
</script>

<template>

    <HeaderVue>

    </HeaderVue>

    <div class="main">
        <div class="content">
            <img class="img-filmes" :src="`https://image.tmdb.org/t/p/w185${movieStore.currentMovie.poster_path}`"
                :alt="movieStore.currentMovie.title" />

            <div class="details">
                <h1>Filme: {{ movieStore.currentMovie.title }}</h1>
                <p>{{ movieStore.currentMovie.tagline }}</p>
                <p>{{ movieStore.currentMovie.overview }}</p>
                <p>Orçamento: ${{ movieStore.currentMovie.budget }}</p>
                <p>Avaliação: {{ movieStore.currentMovie.vote_average }}</p>
            </div>
        </div>
    </div>

    
    <div class="companies">
        <p style="color: black;">PRODUTORAS</p>
        <template v-for="company in movieStore.currentMovie.production_companies" :key="company.id">
            <img v-if="company.logo_path" :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
                :alt="company.name" />
            <p v-else>{{ company.name }}</p>
        </template>
    </div>

</template>

<style scoped>
.companies {
    display: flex;
    column-gap: 3rem;
    align-items: center;
    margin-bottom: 2rem;
    background-color: white;

}

.detail {
    width: 500px;
}

.content {
    display: flex;
    gap: 50px;
    margin-top: 200px;
    align-items: center;
    justify-content: center;
}



.img-filmes {
    border: 10px solid rgb(238, 238, 238);
    width: 700px;
    margin-left: 100px;
    margin-bottom: 100px;
    
}

p, h1 {
    color: white;
}


</style>