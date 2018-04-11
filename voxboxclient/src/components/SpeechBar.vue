<script>
export default {
  name: "SpeechBar",
  props: {
    msg: String
  }
};
</script>
<template>
    <div id="SpeechBar"> <!-- gotta keep the id for each fo the vue -->

        <div class="SpeechBar">
            <div class="Favorite">
                <p>Favorite
                    <br>&#9733;</p>
            </div>
            <div class="sentence" id="sentence">
                <p id="saything">Example Text</p>
            </div>
            <div id="saybutton" class="Speak">
                <img src="../assets/SpeakButton.png" alt = "Speak Button" /> </div>
            </div>
        </div>

    </div>
</template>


