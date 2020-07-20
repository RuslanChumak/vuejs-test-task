<template>
<div class='container'>
  
  <router-link to="/addBook">Add Book</router-link>
  <div class="page">
    <Home />
    <router-view ></router-view>
  </div>
</div>    
 
</template>

<script>
import Home from './views/Home'
export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
  .v-card{
    margin:10px;
    
  }
  a{
    color:black;
    text-decoration: none;
    border: 1px solid gray;
    border-radius: 10px;
    margin:10px;
    padding: 5px;
  }
  .page{
    width: 100%;
    display:flex;
    justify-content: space-around;
  }
  
  
</style>