<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else>{{ post.blogHTML }}</p>
        <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
          Login / Cadastrar-se<Arrow class="arrow arrow-light" />
        </router-link>
        <router-link class="link link-light" v-else to="#">
          Veja o Post<Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="">
      <img v-else :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="">
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"

export default {
  name: 'BlogPost',
  props: ['post'],
  components: {
    Arrow,
  },
  data() {
    return {}
  },
};
</script>

<style scoped>
.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.blog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 4;
  order: 2;
}

@media (min-width: 700px) {
.blog-wrapper {
  min-height: 650px;
  max-height: 650px;
  flex-direction: row;
}

.blog-content {
  order: 1;
}
}

@media (min-width: 800px) {
.blog-content {
  flex: 3;
}
}
</style>
