<template>

  <div id="app">
 
    

    
    <navigation-menu ></navigation-menu>
    
    <inventory-menu></inventory-menu>
    <inventory-menu></inventory-menu>
  </div>

</template>

<script>

import Navigation from './components/Navigation.vue';
import TopNavigation from './components/TopNavigation.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    NavigationMenu: Navigation,
    TopNavigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

/** 
Palette:

palevioletred: rgb(222,65,146) 
royalblue : rgb(44,113,216)
dodgerblue: rgb(32,134,234)
sandybrown: rgb(217,169,85)
lightgray: rgb(224,211,194)
lightseagreen: rgb(23,170,162)
dimgray (text): #525f7f
darkslategray (boldtext) : rgb(50,50,93)
**/

html, body{
  height: 100%;
  overflow: hidden;
  margin: 0px;
  color: #525f7f;
}

#app {
  font-family: 'Open Sans', 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #525f7f;
  background: #e3e8ee;
  
  height: 100%;
}
#nav-menu{
  clear: both;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
