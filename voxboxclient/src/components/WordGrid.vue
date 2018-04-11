<script>
export default {
  name: "WordGrid",
  props: {
    msg: String
  }
};
</script>
<template>
    <div id="WordGrid">

<div class="Vocabulary">
      <div class="item" class="say">
        <p class="Words">Again</p>
        <img src="https://i.imgur.com/UCxmzJx.png" alt = "Again">
      </div>
      <div class="item" class="say">
        <p class="Words">All</p>
        <img src="https://i.imgur.com/UCxmzJx.png" alt = "All">
      </div>
       <div class="item" class="say">
        <p class="Words">Goodbye</p>
        <img src="https://i.imgur.com/UCxmzJx.png" alt = "Goodbye">
      </div>
      <div class="item" class="say">
        <p class="Words">Finished</p>
        <img src="https://i.imgur.com/UCxmzJx.png" alt = "Finished">
      </div>


<!-- Folder1/Things -->
  <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/kkqg1WH.png">
   </div>

 <!-- The Modal -->
<div class="modal modal_multi">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi"> &times; </span>
       <div class="item say">
     <h1 class="Words1">Toys</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Toys">
   </div>
    <div class="item say">
     <h1 class="Words1">Box</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Box">
   </div>
    <div class="item say">
     <h1 class="Words1">Food</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Food">
   </div>
  </div>
</div> 

<!-- Folder2/Action -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/pBsvtcK.png">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="Words1">Say</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Say">
   </div>
    <div class="item say">
     <h1 class="Words1">Sing</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Sing">
   </div>
    <div class="item say">
     <h1 class="Words1">Stop</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Stop">
   </div>
  </div>
</div>

<!-- Folder3/Clothes -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/oeQe0Xk.png">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="Words1">Shirt</h1>
     <img src = "https://i.imgur.com/ID5ieEG.png" alt = "Shirt">
   </div>
    <div class="item say">
     <h1 class="Words1">Pants</h1>
     <img src = "https://i.imgur.com/9pWQJSd.png" alt = "Pants">
   </div>
    <div class="item say">
     <h1 class="Words1">Jacket</h1>
     <img src = "https://i.imgur.com/5Y6UkLd.png" alt = "Jacket">
   </div>
  </div>
</div>

<!-- Folder4/Travel -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/cTMnYlV.png">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
   <div class="item say">
     <h1 class="Words1">America</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "America">
   </div>
    <div class="item say">
     <h1 class="Words1">Europe</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Europe">
   </div>
    <div class="item say">
     <h1 class="Words1">Asia</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Asia">
   </div>
  </div>
</div>

<!-- Folder5/Places -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/dMMkTt7.png">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi"> &times;</span>
       <div class="item say">
     <h1 class="Words1">Home</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Home">
   </div>
    <div class="item say">
     <h1 class="Words1">School</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "School">
   </div>
    <div class="item say">
     <h1 class="Words1">Hospital</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Hospital">
   </div>
  </div>
</div> 

<!-- Folder6/People -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/Xy1Wvlz.png">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="Words1">Mom</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Mom">
   </div>
    <div class="item say">
     <h1 class="Words1">Dad</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Dad">
   </div>
    <div class="item say">
     <h1 class="Words1">Teacher</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Teacher">
   </div>
  </div>
</div>

<!-- Folder7/Colors -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/w8lrWUO.png">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="Words1">Blue</h1>
     <img src = "https://i.imgur.com/7T9eCS6.png" alt = "Blue">
   </div>
    <div class="item say">
     <h1 class="Words1">Red</h1>
     <img src = "https://i.imgur.com/erGwWDg.png" alt = "Red">
   </div>
    <div class="item say">
     <h1 class="Words1">Yellow</h1>
     <img src = "https://i.imgur.com/9pWQJSd.png" alt = "Yellow">
   </div>
  </div>
</div>

<!-- Folder8/Emergency -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/BU9oclh.png">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
         <div class="item say">
     <h1 class="Words1">Help</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Help">
   </div>
    <div class="item say">
     <h1 class="Words1">Call 911</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Call 911">
   </div>
    <div class="item say">
     <h1 class="Words1">Stop</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Stop">
   </div>
  </div>
</div>

<div class="item say">
    <h1 class="Words1">Who</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Who">
   </div>
   <div class="item say">
     <h1 class="Words1">What</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "What">
   </div>
   <div class="item say">
     <h1 class="Words1">Why</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Why">
   </div>
   <div class="item say">
     <h1 class="Words1">When</h1>
     <img src = "https://i.imgur.com/4jwKpOp.pngp" alt = "When">
   </div>
   <div class="item say">
     <h1 class="Words1">How</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "How">
   </div>
   <div class="item say">
     <h1 class="Words1">Where</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Where">
   </div>
   <div class="item say say">
     <h1 class="Words1">Want</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Want">
   </div>
   <div class="item say">
     <h1 class="Words1">Time</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Time">
  </div>
    <div class="item say">
     <h1 class="Words1">Love</h1>
     <img src = "https://i.imgur.com/nxI4WbJ.png" alt = "Love">
   </div>



    </div>
</template>

