<script>
export default {
    name: "WordGrid",
    props : {
        msg: String
    },    
    data: {
        isShowing:false,
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


    <span v-for="(folder) in $store.state.Folders">
        <div class="myBtn_multi" 
            v-for="(words) in folder.slice(0,1)"
             @click="isShowing = true">
                <h1 class="words"> {{ words.value }} </h1>
                <img v-bind:src="'/img/' + words.src"  v-bind:alt="words.value" />
        </div>
    </span>
    
<!--
    <div v-show="isShowing" 
    v-for="(folder) in $store.state.Folders"
    class="modal">
      <div v-for="(words) in folder"
        class="modal-content">
            <button class="btn-close"
              @click="isShowing = false">
               x
            </button>
        <div v-for="(word) in words" class="item say">
            <h1 class="words">{{ word.value }}</h1>
            <img v-bind:src="'/img/' + word.src"  v-bind:alt="word.value" />
        </div>
      </div>
    </div>
-->
    <div v-for="(folder) in $store.state.Folders">
        <div class="modal-content">
          <span class="close close_multi"> &times; </span>
            <div class="item say"
            v-for="(words) in folder[1]"
            v-on:click="$store.state.mainSentence +=  words.value + ' ' ">
                <h1 class="words"> {{words.value}} </h1>
                <img v-bind:src="'/img/' + words.src"  v-bind:alt="words.value" />
            </div>
        </div>
    </div>
    
  </div>
</div>
</template>
