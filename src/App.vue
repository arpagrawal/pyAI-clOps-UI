<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <psai-head-bar></psai-head-bar>
    <div class="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from './router';
import psaiHeadBar from './components/psai-head-bar/psai-head-bar.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    psaiHeadBar,
    // HelloWorld
  },
  router,
};
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-body {
    max-width: 1440px;
    margin: 0 auto;
}
</style>
