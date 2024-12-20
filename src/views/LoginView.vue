<script setup>
import { ref } from 'vue';


const email = ref('');
const senha = ref('');
const mostrarMensagemSucesso = ref(false);


const validarFormulario = (event) => {
  event.preventDefault();


  if (!email.value) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }
  if (!senha.value) {
    alert('Por favor, preencha sua senha.');
    return;
  }


  mostrarMensagemSucesso.value = true;
};


</script>

<template>
  <div class="container">
    <div class="login">
      <RouterLink to="/filmes">
        <button class="back"><i class="fas fa-arrow-left"></i></button>
      </RouterLink>

      <div class="form">
        <div style="display: flex;">
          <h1 class="txt-white">SEJA BEM-VINDO</h1>
          <h1 class="txt-red">STAR-PLUS</h1>
        </div>
        <p>Bem-vindo a StarPlus, entre na sua conta de usuario</p>

        <form @submit="validarFormulario">


          <div style="margin-top: 50px;" class="input-group">
            <i class="fas fa-envelope icon"></i>
            <input
              v-model="email"
              type="email"
              required
              placeholder="seuemail@gmail.com"
            />
          </div>

          <div class="input-group">
            <i class="fas fa-lock icon"></i>
            <input
              v-model="senha"
              type="password"
              required
              placeholder="sua senha"
            />
          </div>
          <button class="btn-login" type="submit">
            ENTRAR
          </button>
        </form>

        <p>Não possui conta?
          <RouterLink style="color: rgb(98, 138, 224);" to="/cadastro">Clique Aqui</RouterLink>
        </p>
      </div>
    </div>

    <div
      v-if="mostrarMensagemSucesso"
      class="mensagem-sucesso"
    >
      <p style="color: black;">Usuário criado com sucesso!</p>
      <RouterLink to="/"><button>OK</button></RouterLink>
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
  margin-top: 15vh;
  gap: 10px;
  animation: slideUp 2s ease-out;
}

p {
  color: rgb(153, 153, 153);
  font-size: 0.9rem;
}

.input-group {
  display: flex;
  align-items: center;
  background-color: rgb(39, 39, 39);
  border-radius: 10px;
  padding: 10px;
  width: 500px;
  height: 40px;
  gap: 10px;
  margin-top: 10px;
}

.icon {
  color: white;
  font-size: 16px;
}

input {
  flex: 1;
  background: none;
  border: none;
  color: white;
  font-size: 13pt;
  outline: none;
}

.btn-login {
  background: #9e060d;
  border: none;
  padding: 15px;
  width: 500px;
  color: white;
  margin-top: 30px;
  transition: 0.3s;
  border-radius: 10px;
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

.mensagem-sucesso {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 70px;
  width: 500px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: black;
}

.mensagem-sucesso button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #9e060d;
  border: none;
  width: 100px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.mensagem-sucesso button:hover {
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
