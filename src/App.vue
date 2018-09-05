<template>

  <div id="app">
   <router-view/>
  </div>

</template>

<script>
import Navigation from "./components/Navigation.vue";
import TopNavigation from "./components/TopNavigation.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    NavigationMenu: Navigation,
    TopNavigation
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

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

/**
Palette 2:
Midnight blue : rgb(0,48,86)
Goldenrod: rgb(242,208,59)
sandybrown: rgb(217,169,85)
teal: rgb(4,81,140)
darkturqoise: rgb(0,161,217)
mediumturqoise: rgb(71,217,191)

**/

html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
}

#app {
  font-family: "Open Sans", "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #525f7f;
  background: #e3e8ee;

  height: 100%;
}
#nav-menu {
  clear: both;
}
h1,
h2 {
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
@keyframes slideInLeft {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
