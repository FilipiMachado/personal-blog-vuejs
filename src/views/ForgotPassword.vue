<template>
  <div class="reset-password">
    <Modal v-if="modalActive" v-on:close-modal="closeModal"/>
    <Loading v-if="loading"/>
    <div class="form-wrap">
      <form class="reset">
        <h2>Resetar Senha</h2>
        <p>Esqueceu a senha? Insira seu email para resetá-la</p>
        <div class="inputs">
          <div class="input">
            <input type="text"
                   placeholder="Email"
                   v-model="email">
            <email class="icon"/>
          </div>
        </div>
        <button>Resetar</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
/* Icons */
import email from "../assets/Icons/envelope-regular.svg"
/* Components */
import Modal from "../components/Modal.vue"
import Loading from "../components/Loading.vue"

export default {
  name: 'ForgotPassword',
  components: {
    email,
    Modal,
    Loading
  },
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: '',
      loading: null,
    }
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive
      this.email = ''
    }
  }
};
</script>

<style>
.reset-password {
  position: relative;
}

.form-wrap .reset h2 {
  margin-bottom: 8px;
}

.form-wrap .reset p {
  text-align: center;
  margin-bottom: 32px;
}

</style>
