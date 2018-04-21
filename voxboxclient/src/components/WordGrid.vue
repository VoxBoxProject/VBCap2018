<script>
export default {
  name: "WordGrid",
  props : {
    msg: String
  }, 
  methods:{
  // Get the modal

  var modalparent = document.getElementsByClassName("modal_multi");

  // Get the button that opens the modal

  var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

  // Get the <span> element that closes the modal
  var span_close_multi = document.getElementsByClassName("close_multi");

  // When the user clicks the button, open the modal
  setDataIndex() {
    for (let i = 0; i < modal_btn_multi.length; i++) {
      modal_btn_multi[i].setAttribute("data-index", i);
      modalparent[i].setAttribute("data-index", i);
      span_close_multi[i].setAttribute("data-index", i);
    }
  }

  for (let i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].onclick() {
      var ElementIndex = this.getAttribute("data-index");
      modalparent[ElementIndex].style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span_close_multi[i].onclick() {
      var ElementIndex = this.getAttribute("data-index");
      modalparent[ElementIndex].style.display = "none";
    };
  }

  window.onload() {
    setDataIndex();
  };

  window.onclick(event) {
    if (event.target === modalparent[event.target.getAttribute("data-index")]) {
      modalparent[event.target.getAttribute("data-index")].style.display = "none";
    }
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
    <div v-for="(folder) in $store.state.Folders" class = "myBtn_multi" >
        <!--should select the element that isn't the 3rd nested array-->
        <div v-for="(words) in folder" >
            <pre> {{ words }}</pre>

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
                <div v-for="(word) in words" class="item say">
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
