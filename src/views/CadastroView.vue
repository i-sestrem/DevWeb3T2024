<script setup>


</script>

<template>

  <div class="container">





    <div class="login">

      <RouterLink to="/login">
        <button class="back"><i class="fas fa-arrow-left"></i></button>
      </RouterLink>

      <div class="form">
        <div style="display: flex;">
          <h1 class="txt-white">SEJA BEM-VINDO</h1>
          <h1 class="txt-red">STAR-PLUS</h1>
        </div>
        <p>Bem-vindo a StarPlus, cadastre-se como usuario</p>

        <input style="margin-top: 5vh;" type="name" placeholder="nome">
        <input type="text" placeholder="seuemail@gmail.com">
        <input type="password" placeholder="sua senha">
        <input type="password" placeholder="confimar senha">

        <button class="btn-login">

          CADASTRAR

        </button>

        <p>Ja possui conta? <RouterLink style="color: rgb(98, 138, 224);" to="/login">Clique Aqui</RouterLink>
        </p>




      </div>



    </div>


  </div>

</template>

<style scoped>
.container {
  display: flex;
}

.login {
  background-color: rgb(15, 15, 15);
  width: 100%;
  height: 100vh;
}



.txt-white {
  color: white;
  font-size: 1.5rem;

}

.txt-red {
  color: #9e060d;
  margin-left: 10px;
  font-size: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  gap: 10px;
  animation: slideUp 2s ease-out;

}

p {
  color: rgb(153, 153, 153);
  font-size: 0.9rem;
}

input {
  justify-content: center;
  background-color: rgb(15, 15, 15);
  border: none;
  border-bottom: 1px solid white;
  width: 500px;
  height: 40px;
  color: white;
  font-size: 13pt;
}

input:focus {
  outline: none
}

.btn-login {
  background: #9e060d;
  border: none;
  padding: 15px;
  width: 500px;
  color: white;
  margin-top: 50px;
  transition: 0.3s;
}

.back {
  margin-top: 20px;
  margin-left: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgb(26, 26, 26);
  border: none;
  color: white;
  font-size: 25px;

}

.back:hover {
  border: 1px solid #fff;
}



.btn-login:hover {
  background-color: #e00914;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
