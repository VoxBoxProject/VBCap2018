<script>
export default {
  name: "CommonWords",
  props: {
    msg: String
  }
};
</script>
<template>
    <div id="CommonWords">
        <div v-for="(word) in $store.state.Common">
            <div class = "item" v-on:click="$store.state.mainSentence +=  word.value + ' ' ">
                <h1 class="words"> {{ word.value }} </h1>
                <img v-bind:src="'/img/' + word.src"  v-bind:alt="word.value" />
            </div>
        </div> 
    </div>
</template>
