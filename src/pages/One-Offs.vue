<template>
  <Layout>
   <div>
      <h1 >One-offs</h1>
      <ul>
          <li
           v-for="one-off in $page.one-off.edges" 
          :key="one-off.id" 
          ></li>
      </ul>
    </div>

  </Layout>
</template>

<page-query>
  query One-offs {
    one-off: allOneOff {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'One-Offs'
  },
  data() {
    return {
    }
  },
  created() {
    // this.$page.one-offs.edges.forEach(item => {
    //   const parsedDate = new Date(item.node.date).toDateString();
    //   item.node.date = parsedDate;
    // });
  },
  methods: {
  }
}
</script>

<style>
  
</style>
