<script>
export default {
  name: "WordGrid",
  props : {
    msg: String
  }
  /*
  ,
  methods:{
    //https://www.w3schools.com/howto/howto_css_modals.asp
      // Get the modal
      
        modal = document.getElementById('modal_multi'),

        // Get the button that opens the modal
        btn = document.getElementById("myBtn_multi"),

        // Get the <span> element that closes the modal
        span = document.getElementsByClassName("close_multi"),

        // When the user clicks on the button, open the modal 
        btn.onclick: function() {
            modal.style.display = "block";
        },

        // When the user clicks on <span> (x), close the modal
        span.onclick: function() {
            modal.style.display = "none";
        },

        // When the user clicks anywhere outside of the modal, close it
        window.onclick: function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
  }*/
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
<!--
    <!- -Folders has folder which has words- ->
    <div v-for="(folder) in $store.state.Folders" 
        class = "myBtn_multi">
        <!- -should select the element that isn't the 3rd nested array
        ... shouldn't be creating 2 item classes within myBtn, the 2nd one looks like its trying to access array- ->
        <div v-for="(words) in folder">
            <div class="item say"> <!- -v-on:click="showModal = true"- ->
                <h1 class="words"> {{ words[0].value }} </h1>
                <img v-bind:src="'/img/' + words[0].src"  v-bind:alt="words[0].value" />
            </div>
        </div> <!- -words- ->
    </div> <!- -folders- ->

    
        <!- -Modal- ->
    <div class="modal modal_multi">
        <!- - Modal content - ->
        <div class="modal-content">
            <span class="close close_multi"> &times; </span>
            
            <!- -this isn't appearing
            maybe refer the arrays in folders by index- ->
            <div v-for="(word) in $store.state.Folders.folder.words" class="item say">
                <h1 class="words">{{ word.value }}</h1>
                <img v-bind:src="'/img/' + word.src"  v-bind:alt="word.value" />
            </div>
        </div>
    </div> <!- -modal modal_multi - ->
   -->
  </div> <!-- Vocab -->
</div> <!-- WordGrid -->
</template>
