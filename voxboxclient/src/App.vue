<script>
  import SpeechBar from "./components/SpeechBar.vue"
  import CommonWords from "./components/CommonWords.vue"
  import WordGrid from "./components/WordGrid.vue"

  const sourceOfTruth = {}

  export default {
  name: 'app',
  components: {
    SpeechBar, 
    CommonWords,
    WordGrid
  }
}
</script>

<template>
  <div id="app">
       <!-- <router-view/>-->
 <SpeechBar></SpeechBar>
 <!-- <WordLibrary> -->
  <div class = "WordLibrary" id="saybutton">
    <!-- button is for the JS -->
   <CommonWords></CommonWords>
   <WordGrid></WordGrid>        
 </div>
 <!-- </WordLibrary> -->

 </div>  <!-- app div -->
</template>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
