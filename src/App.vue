<script setup>
import { ref, onMounted } from 'vue';
import api from './plugins/axios';

const moviesGenres = ref([]);
const TVGenres = ref([]);
const isMenuActive = ref(false)

onMounted(async () => {
  let response = await api.get('genre/movie/list?language=pt-BR');
  moviesGenres.value = response.data.genres;
  response = await api.get('genre/tv/list?language=pt-BR');
  TVGenres.value = response.data.genres;
});


function toggleMenu() {
  isMenuActive.value = !isMenuActive.value
}
</script>

<template>
  <header>
    <nav>

      <div class="hamburguer" @click="toggleMenu()">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>

  </header>


  <div :class="['nav-menu', { active: isMenuActive }]">
    <nav class="nav-link">

      <ul class="ul-link">
        <li class="nav-item">
          <router-link class="link" to="/">HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link class="link" to="/filmes">FILMES</router-link>
        </li>
        <li class="nav-item">
          <router-link class="link" to="/tv">SERIE</router-link>
        </li>
      </ul>
    </nav>

  </div>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  height: 4rem;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
}

.active {
  display: flex !important;
  flex-direction: column;
  background-color: rgb(37, 37, 37);
  text-align: center;
  width: 30%;
  height: 100%;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #fff;
}

.bar {
  display: block;
  background-color: #fff;
  width: 25px;
  height: 3px;
  margin: 5px auto;
}

.nav-menu {
  position: fixed;
  display: none;
}

.nav-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #fff;

}

.nav-item {
  margin-top: 30px;
  font-size: 11.5pt;
}



.ul-link {
  list-style: none;
  margin-top: 50px;
  gap: 20px;
}
</style>
