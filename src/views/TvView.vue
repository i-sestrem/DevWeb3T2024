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

const tvs = ref([]);
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');


const listTv = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true;
  const response = await api.get('discover/tv', {
    params: {
      with_genres: genreId,
      language: 'pt-BR',
    },
  });
  tvs.value = response.data.results;
  isLoading.value = false;
};

function openTv(tvId) {
  router.push({ name: 'TvDetails', params: { tvId } });
}

onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('tv');
  isLoading.value = false;
});
</script>
<template>
  <HeaderVue>

  </HeaderVue>
    <h1 class="title">Series</h1>
    <ul class="genre-list">
        <li
        v-for="genre in genreStore.genres"
    :key="genre.id"
    @click="listTv(genre.id)"
    class="genre-item"
    :class="{ active: genre.id === genreStore.currentGenreId }"
>
   {{ genre.name }} 
</li>
    </ul>
    <loading v-model:active="isLoading" is-full-page />
    <div class="tv-list">
        <div v-for="Tv in tvs" :key="Tv.id" class="tv-card">
            <img
            :src="`https://image.tmdb.org/t/p/w500${Tv.poster_path}`"
            :alt="Tv.title"
            @click="openTv(Tv.id)"
            />
            <div class="tv-details">
                <p class="tv-title">{{ (Tv.name) }}</p>
                <p class="tv-release-date">{{ formatDate(Tv.first_air_date) }}</p>
                <p class="tv-genres">
                    <span
                    v-for="genre_id in Tv.genre_ids"
  :key="genre_id"
  @click="listTv(genre_id)"
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

.tv-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

}

.tv-card {
    width: 24rem;
    height: 39rem;
    overflow: hidden;
    background-color: #0c0c0c;
    color: #fff;
    transition: 0.1s;
    text-align: center;
}

.tv-card:hover {
  transform: translateY(-7px);
}

.tv-card img {
    width: 100%;
    height: 28rem;
}

.tv-details {
    padding: 0 0.5rem;
}

.tv-title {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.3rem;
    height: 3.2rem;
    margin-top: 5px;
}

.tv-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.tv-genres span {
  background-color: #000000;
  padding: 0.2rem 0.5rem;
  color: #fff;
  margin-top: 5px;
  margin-bottom: 3px;
}

.tv-genres span:hover {
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
  background-color: #67b086;
  font-weight: bolder;
}

.tv-genres span.active {
  background-color: #abc322;
  color: #000;
  font-weight: bolder;
}
</style>
