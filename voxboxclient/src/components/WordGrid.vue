<script>
export default {
  name: "WordGrid",
  props : {
    msg: String
  }
};
</script>
<template>
<div id="WordGrid">

  <div class="Vocabulary">
    
     <div v-for="(word) in $store.state.words"
        class = "item say" 
        v-on:click="$store.state.mainSentence +=  word.value + ' ' ">
       
       <h1 class="words"> {{ word.value }} </h1>
       <img v-bind:src="'/img/' + word.src"  v-bind:alt="word.value" />
     
     </div> <!--unorganizeed word-->

    <!--Folders has folder which has words-->
    <div v-for="(folder) in $store.state.Folders" class = "myBtn_multi">
        <!--should select the element that isn't the 3rd nested array-->
        <div v-for="(words) in $folder">
            <div class="item say">
                <h1 class="words"> {{ words.value }} </h1>
                <img v-bind:src="'/img/' + words.src"  v-bind:alt="words.value" />
            </div>

        <!--Modal-->
        <div class="modal modal_multi">
            <!-- Modal content -->
            <div class="modal-content">
             <span class="close close_multi"> &times; </span>
             
             <!--this isn't appearing-->
                <div v-for="(word) in $words" class="item say">
                    <h1 class="words">{{ word.value }}</h1>
                    <img v-bind:src="'/img/' + word.src"  v-bind:alt="word.value" />
                </div>
            </div>
        </div> <!--modal modal_multi -->
        </div> <!--words-->
    </div> <!--folders-->
  </div> <!-- Vocab -->
</div> <!-- WordGrid -->
</template>
