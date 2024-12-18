<script setup></script>

<template>
  <div id="app">
    <main>
      <p>Conteúdo da página</p>
    </main>
    <footer>
      <h1>TESTE</h1>
    </footer>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

footer {
  background-color: black;
  color: white;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 12pt;
}
</style>
