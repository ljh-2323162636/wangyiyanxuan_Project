<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from 'components/Footer/Footer'
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components:{
    name:'Footer',
    "Footer":Footer
  }
}
</script>

<style lang="stylus" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width :100%;
  height:100%;
  overflow :hidden;
  margin :0;
  padding:0;
}
</style>