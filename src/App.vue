<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar>
    </div>
   <router-view/>
     <Footer></Footer>
     <Preloader></Preloader>
    </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Preloader from './components/Preloader.vue'

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Preloader
    
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
body{
    font-family: "open sans", "san-serif";
    color: #444444;
}

a{
    color: #1977cc;
    text-decoration: none;
}

a:hover{
    color:#3291e6;
    text-decoration: none;
}

h1, h2, h3, h4, h5, h6{
    font-family: "Raleway", sans-serif;
}
</style>
