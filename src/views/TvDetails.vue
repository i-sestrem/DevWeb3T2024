<script setup>
import { onMounted, defineProps } from 'vue';
import { useTvStore } from '@/stores/tv';
import HeaderVue from '@/components/HeaderVue.vue';
const tvStore = useTvStore();

const props = defineProps({
    tvId: {
        type: Number,
        required: true,
    },
});

onMounted(async () => {
    await tvStore.getTvDetail(props.tvId);
});

</script>

<template>
    <HeaderVue></HeaderVue>

    <div class="tv-details">
      <div class="content">
        <img
          :src="`https://image.tmdb.org/t/p/w185${tvStore.currentTv?.poster_path}`"
          :alt="tvStore.currentTv.name"
          class="poster-image"
        />

        <div class="details">
          <h1 class="tv-title">{{ (tvStore.currentTv.name) }}</h1>
          <p class="tagline">{{ tvStore.currentTv.tagline }}</p>
          <p class="overview">{{ tvStore.currentTv.overview }}</p>
          <p class="rating">Avaliação: {{ tvStore.currentTv.vote_average }}</p>
        </div>
      </div>

      <div class="production-companies">
        <p class="companies-title">PRODUTORAS</p>
        <div class="companies-list">
          <template v-for="company in tvStore.currentTv.production_companies" :key="company.id">
            <div class="company">
              <img
                v-if="company.logo_path"
                :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
                :alt="company.name"
                class="company-logo"
              />
              <p v-else class="company-name">{{ company.name }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </template>

  <style scoped>


   .movie-details {
    text-align: center;
    padding: 20px;
  }

  .production-companies {
    display: flex;
    flex-direction: column;
    background-color: rgb(180, 180, 180);
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 130px;
    gap: 100px;
  }

  .poster-image {
    border: 10px solid rgb(255, 255, 255);
    color: white;
    width: 400px;
    height: auto;
    margin-right: 20px;
    margin-bottom: 90px;
  }

  .details {
    max-width: 600px;

    border-radius: 25px;
   
  }

  .movie-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #000000;
  }

  .tagline {
    font-style: italic;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .overview {
    margin-bottom: 10px;
  }

  .budget {
    margin-bottom: 10px;
  }

  .rating {
    font-weight: bold;
    color: #008080;
  }

  .production-companies {
    margin-top: 20px;
  }

  .companies-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #000000;
    text-align: center;
  }

  .companies-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .company {
    margin-bottom: 10px;
  }

  .company-logo {
    width: 92px;
    height: auto;
    margin-right: 10px;
    border-radius: 4px;

  }

  p, h1 {
    color: rgb(255, 255, 255);
  }

  .company-name {
    margin-bottom: 10px;
    color: #333;
  }
  @media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
    
  }

  .poster-image {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .details {
    max-width: 100%;
    padding: 0 20px;

  }

  .companies-list {
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .movie-title {
    font-size: 1.5rem;
  }

  .companies-title {
    font-size: 1.2rem;
  }

  .company-logo {
    width: 72px;
  }
}
  </style>