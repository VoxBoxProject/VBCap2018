<script>
export default {
  name: "topbar",
  props: {
    msg: String
  }
};
</script>
<template>
    <div id="topBar">
        <div class="topLeft">
            <p>Favorite
                <br>&#9733;</p>
        </div>
        <div class="sentence" id="sentence">
            <p id="saything">Example Text</p>
        </div>
        <div id="saybutton" class="topRight">
            <img src="https://i.imgur.com/UCxmzJx.png" alt="logo" /> </div>
        </div>
    </div>
</template>


