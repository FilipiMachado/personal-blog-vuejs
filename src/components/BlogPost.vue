<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else>{{ post.blogPost }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['post'],
  data() {
    return {}
  },
};
</script>

<style scoped>

</style>
