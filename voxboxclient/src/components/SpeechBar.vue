<script>
export default {
  name: "SpeechBar",
  props: {
    msg: String
  },
  methods: {
      speak: function(event) {
        let sayvalue = document.getElementById("saything");
        var msg = new SpeechSynthesisUtterance(sayvalue.innerText);
        window.speechSynthesis.speak(msg);
}
  }
};
</script>
<template>
    <div id="SpeechBar"> <!-- gotta keep the id for each fo the vue -->

        <div class="Favorite">
            <p>Favorite
                <br>&#9733;</p>
        </div>
        <div class="sentence" id="sentence">
            <p id="saything">{{  $store.state.mainSentence }}</p>
        </div>
        <div id="saybutton" class="Speak" v-on:click="speak">
            <img src="../assets/SpeakButton.png" alt = "Speak Button">
        </div>

    </div>
</template>


