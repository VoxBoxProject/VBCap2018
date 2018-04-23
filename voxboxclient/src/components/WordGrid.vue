<script>
import modal from "./modal.vue"
export default {
    name: "WordGrid",
    props : {
        msg: String
    },
    components: {
      modal,
    },    
  data () {
    return {
    isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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


    <div v-for="(folder) in $store.state.Folders">
        <div class="item say" 
            v-for="(words) in folder.slice(0,1)"
            @click="showModal">
                <h1 class="words"> {{ words.value }} </h1>
                <img v-bind:src="'/img/' + words.src"  v-bind:alt="words.value" />
        </div>
    </div>

    <modal v-show="isModalVisible" @close="closeModal"/>
  </div>
</div>
</template>
