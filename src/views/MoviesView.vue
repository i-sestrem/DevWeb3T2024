<script setup>
import { ref, onMounted } from 'vue';
import HeaderVue from '@/components/HeaderVue.vue';
import api from '@/plugins/axios';
import Loading from 'vue-loading-overlay';
import { useRouter } from 'vue-router'
import { useGenreStore } from '@/stores/genre';

const genreStore = useGenreStore();
const router = useRouter()

const isLoading = ref(false);

const movies = ref([]);
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');


const listMovies = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true;
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      language: 'pt-BR',
    },
  });
  movies.value = response.data.results;
  isLoading.value = false;
};

function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } });
}

onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('movie');
  isLoading.value = false;
});
</script>
<template>
  <HeaderVue>

  </HeaderVue>
    <h1 class="title">FILMES</h1>
    <ul class="genre-list">
        <li
        v-for="genre in genreStore.genres"
    :key="genre.id"
    @click="listMovies(genre.id)"
    class="genre-item"
    :class="{ active: genre.id === genreStore.currentGenreId }"
>
   {{ genre.name }} 
</li>
    </ul>
    <loading v-model:active="isLoading" is-full-page />
    <div class="movie-list">
        <div v-for="movie in movies" :key="movie.id" class="movie-card">
            <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
            @click="openMovie(movie.id)"
            />
            <div class="movie-details">
                <p class="movie-title">{{ (movie.title).toUpperCase() }}</p>
                <p class="movie-release-date">{{ formatDate(movie.release_date) }}</p>
                <p class="movie-genres">
                    <span
                    v-for="genre_id in movie.genre_ids"
  :key="genre_id"
  @click="listMovies(genre_id)"
  :class="{ active: genre_id === genreStore.currentGenreId }"
>
   {{ genreStore.getGenreName(genre_id) }} 
</span>
                </p>
            </div>

        </div>
    </div>

</template>
<style scoped>
.genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    margin-bottom: 2rem;
}

.genre-item {
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: #000000;
    border-radius: 5px;
    transition: 0.3s;
}

.genre-item:hover {
    cursor: pointer;
    background-color: rgb(177, 22, 22);

}

.movie-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

}

.movie-card {
    width: 24rem;
    height: 39rem;
    overflow: hidden;
    background-color: #0c0c0c;
    color: #fff;
    transition: 0.1s;
    text-align: center;
}

.movie-card:hover {
  transform: translateY(-7px);
}

.movie-card img {
    width: 100%;
    height: 28rem;
}

.movie-details {
    padding: 0 0.5rem;
}

.movie-title {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.3rem;
    height: 3.2rem;
    margin-top: 5px;
}

.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.movie-genres span {
  background-color: #000000;
  padding: 0.2rem 0.5rem;
  color: #fff;
  margin-top: 5px;
  margin-bottom: 3px;
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #242424;
}


.title {
  color: white;
  text-align: center;
  margin-top: 110px;
  margin-bottom: 50px;
}

.active {
  background-color: rgb(177, 22, 22);
  font-weight: bolder;
}

.movie-genres span.active {
  background-color: rgb(177, 22, 22);
  color: #ffffff;
  font-weight: bolder;
}
</style>
