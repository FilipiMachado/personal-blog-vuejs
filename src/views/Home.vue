<template>
  <div class="home">

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
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
          title: 'This is a filler Title!',
          blogHTML: 'This is a filler blog post title!',
          blogCoverPhoto: 'beautiful-stories'
        },
      ]
    }
  }
}
</script>
