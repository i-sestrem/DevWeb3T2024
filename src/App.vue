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

      <img class="logo" src="/src/assets/img/initial-m-logo-design-vector.jpg" alt="">

      <i class="fa-solid fa-user"></i>
    </nav>

  </header>


  <div :class="['nav-menu', { active: isMenuActive }]">
    <i class="fa-solid fa-x "  @click="toggleMenu()"></i>
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
  height: 5rem;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
  position: relative;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
}

.hamburguer {
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
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
  left: 0;
  width: 30%;
  height: 100%;
  background-color: rgb(10, 10, 10);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.nav-menu.active {
  opacity: 1;
  transform: translateX(0);
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
  gap: 20px;
}

.fa-x {
position: absolute;
color: #fff;
font-size: 30px;
top: 0;
right: 5px;
cursor: pointer;
margin-top: 30px;
margin-right: 30px;

}

.logo {
  width: 170px;
  height: 80px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.fa-user {
  font-size: 30px;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
}






</style>
