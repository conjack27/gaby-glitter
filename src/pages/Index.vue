<template>
  <Layout>
    <h1>Hello, world!</h1>

 
  </Layout>
</template>

<page-query>
  query Projects {
    allProject {
      edges {
        node {
          title
          path
          content
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
