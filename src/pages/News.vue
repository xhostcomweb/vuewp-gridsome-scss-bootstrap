<template>
  <Layout>
    <div class="section-container">
    <div class="container">
        <div class="row">

            <div class="col-xs-12">
               <img class="img-responsive" src="../assets/images/img-03.jpg">
            </div>
        </div>
        <div class="row">
        <div class="col-xs-12">

     <h1>Vue Wordpress Blog</h1>
    <div class="post-list">
      <p class="#" v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </p>
    </div>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
</div>
                  </div>  
    </div>
      
    </div>

                
    
    
  </Layout>
            
            
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Milligram Vue Wordpress News'
  }
}
</script>
