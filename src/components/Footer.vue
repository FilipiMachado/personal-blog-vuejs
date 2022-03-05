<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }">Personal Blog</router-link>
          <ul>
            <li>
              <a href="#"><youTube class="svg-icon"/></a>
            </li>
            <li>
              <a href="#"><twitter class="svg-icon"/></a>
            </li>
            <li>
              <a href="#"><instagram class="svg-icon"/></a>
            </li>
            <li>
              <a href="#"><linkedin class="svg-icon"/></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Posts' }">Posts</router-link>
            <router-link v-if="user" class="link" :to="{ name: 'Newpost' }">Criar Post</router-link>
            <router-link v-if="!user" class="link" :to="{ name: 'login' }">
              Login / Cadastrar-se
            </router-link>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2022 Todos Direitos Reservados</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
};
</script>

<style scoped>

</style>