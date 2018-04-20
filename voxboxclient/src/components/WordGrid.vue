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
      </div> 

        <!--Folder
        
        folder and modal needs to be fixed
        I just want to reference the first object in the array to be the folder image/title 
        all items index after 0 go into the folder

        -->
        <div v-for="(word) in $store.state.Folder1">
            <div class = "myBtn_multi">
                <!--word.value/src.0 needs to be fixed-->
                <h1 class="words"> {{ word.value.0 }} </h1>
                <img v-bind:src="'/img/' + word.src.0"  v-bind:alt="word.value.0" />
            </div>
        </div> 

        <!--Modal-->
        <div class="modal modal_multi">
            <!-- Modal content -->
            <div class="modal-content">
             <span class="close close_multi"> &times; </span>

                <div v-for="(word) in $store.state.Folder1"> <!-- how to have the starting -->
                    <div class="item say">
                        <h1 class="words">{{ word.value }}</h1>
                        <img v-bind:src="'/img/' + word.src"  v-bind:alt="word.value" />
                    </div>
                </div>

            </div>
        </div> 

  </div>
</div>
</template>
