<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Não tem uma conta?
        <router-link class="router-link" :to="{ name: 'Register' }">
          Cadastre-se
        </router-link>
      </p>
      <h2>Faça Login</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" 
                 placeholder="Email" 
                 v-model="email">
          <email class="icon"/>
        </div>
        <div class="input">
          <input type="password" 
                 placeholder="Password" 
                 v-model="password">
          <password class="icon"/>
        </div>
      </div>
      <router-link class="forgot-password" 
                   :to="{ name: 'ForgotPassword' }">
        Esqueceu a senha?
      </router-link>
      <button>Login</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg"
import password from "../assets/Icons/lock-alt-solid.svg"

export default {
  name: 'Login',
  components: {
    email,
    password
  },
  data() {
    return {
      email: null,
      password: null,
    }
  },
};
</script>

<style>
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
}

.login-register {
  margin-bottom: 32px;
}

.router-link {
  color: #000;
}

.form-wrap form {
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.form-wrap form h2 {
  text-align: center;
  font-size: 32px;
  color: #303030;
  margin-bottom: 40px;
}

.inputs {
  
}

.input {
  
}

.forgot-password {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  margin: 16px 0 32px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease all;
}

.forgot-password:hover {
  border-color: #303030;
}

@media (min-width: 900px) {
  .form-wrap {
    width: 100%;
  }
  .form-wrap form {
    padding: 0 50px;
  }
  .form-wrap form h2 {
    font-size: 40px;
  }
}
</style>
