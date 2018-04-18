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
        <div class="CommonWords">
            <div class="item">
                <h1 class="words">Yes</h1>
                <img src="../assets/Yes.png" alt = "Yes">
            </div>
            <div class="item">
                <h1 class="words">No</h1>
                <img src="../assets/No.png" alt = "No">
            </div>
            <div class="item">
                <h1 class="words">Me</h1>
                <img src="../assets/I.png" alt = "Me">
            </div>
            <div class="item">
                <h1 class="words">You</h1>
                <img src="../assets/He.png" alt = "You">
            </div>
            <div class="item">
                <h1 class="words">Help</h1>
                <img src="../assets/Help.png" alt = "Help">
            </div>
        </div>
    </div>
</template>
