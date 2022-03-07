<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Veja os Posts Mais Recentes</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Não perca nenhum post. Cadastre uma conta grátis hoje mesmo!</h2>
        <router-link class="router-button" to="#">
          Registre-se no Blog <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
import BlogCard from "../components/BlogCard.vue"
import Arrow from "../assets/Icons/arrow-right-light.svg"

export default {
  name: 'Home',
  components: {
    BlogPost,
    BlogCard,
    Arrow
  },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome',
        blogPost:
          'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post',
        welcomeScreen: true,
        photo: 'coding'
      },
      sampleBlogPost: [
        {
          title: 'This is a filler Title!',
          blogHTML: 'This is a filler blog post title!',
          blogCoverPhoto: 'beautiful-stories'
        },
        {
          title: 'This is a filler Title!2',
          blogHTML: 'This is a filler blog post title!2',
          blogCoverPhoto: 'designed-for-everyone'
        },
      ],
      sampleBlogCards: [
        { blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: '5, Março, 2022' },
        { blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: '6, Março, 2022' },
        { blogTitle: 'Blog Card #3', blogCoverPhoto: 'stock-3', blogDate: '7, Março, 2022' },
        { blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-4', blogDate: '8, Março, 2022' },
      ]
    }
  }
}
</script>

<style scoped>
.blog-card-wrap h3 {
  font-weight: 300;
  font-size: 28px;
  margin-bottom: 32px;
}

.updates .container {
  padding: 100px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.router-button {
  
}

@media (min-width: 800px) {
  .updates .container {
    padding: 125px 25px;
    flex-direction: column;
  }
}
</style>
