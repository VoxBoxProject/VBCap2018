<script>
export default {
  name: "SpeechBar",
  props: {
    msg: String
  }
};
</script>
<template>
    <div id="SpeechBar">
        <div class="topLeft">
            <p>Favorite
                <br>&#9733;</p>
        </div>
        <div class="sentence" id="sentence">
            <p id="saything">Example Text</p>
        </div>
        <div id="saybutton" class="topRight">
            <img src="../assets/SpeakButton.png" alt="logo" /> </div>
        </div>
    </div>
</template>


