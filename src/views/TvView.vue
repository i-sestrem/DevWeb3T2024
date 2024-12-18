<script setup>
  import { ref, onMounted } from 'vue';
  import HeaderVue from '@/components/HeaderVue.vue';
  import api from '@/plugins/axios';

  const genres = ref([]);

  onMounted(async () => {
    const response = await api.get('genre/tv/list?language=pt-BR');
    genres.value = response.data.genres;
  });
</script>

<template>
  <HeaderVue></HeaderVue>
    <h1>SÉRIES</h1>
    <ul class="genre-list">
      <li v-for="genre in genres" :key="genre.id" class="genre-item">
        {{ genre.name }}
      </li>
    </ul>
  </template>

  <style scoped>
    .genre-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
      list-style: none;
      padding: 0;
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

h1 {
  color: white;
  text-align: center;
  margin-top: 110px;
  margin-bottom: 50px;
}
  </style>
