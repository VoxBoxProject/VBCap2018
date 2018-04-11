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
      <div class="item say">
        <p class="Words">Again</p>
        <img src="https://i.imgur.com/UCxmzJx.png" alt = "Again">
      </div>
      <div class="item say">
        <p class="Words">All</p>
        <img src="https://i.imgur.com/UCxmzJx.png" alt = "All">
      </div>
       <div class="item say">
        <p class="Words">Goodbye</p>
        <img src="https://i.imgur.com/UCxmzJx.png" alt = "Goodbye">
      </div>
      <div class="item say">
        <p class="Words">Finished</p>
        <img src="https://i.imgur.com/UCxmzJx.png" alt = "Finished">
      </div>


<!-- Folder1/Things -->
  <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/kkqg1WH.png" alt = "Things Folder">
   </div>

 <!-- The Modal -->
<div class="modal modal_multi">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi"> &times; </span>
       <div class="item say">
     <h1 class="words">Toys</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Toys">
   </div>
    <div class="item say">
     <h1 class="words">Box</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Box">
   </div>
    <div class="item say">
     <h1 class="words">Food</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Food">
   </div>
  </div>
</div> 

<!-- Folder2/Action -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/pBsvtcK.png" alt = "Action Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="words">Say</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Say">
   </div>
    <div class="item say">
     <h1 class="words">Sing</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Sing">
   </div>
    <div class="item say">
     <h1 class="words">Stop</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Stop">
   </div>
  </div>
</div>

<!-- Folder3/Clothes -->
 <div class= "myBtn_multi">
     <img src = "../assets/Clothes.png" alt = "Clothes Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="words">Shirt</h1>
     <img src = "https://i.imgur.com/ID5ieEG.png" alt = "Shirt">
   </div>
    <div class="item say">
     <h1 class="words">Pants</h1>
     <img src = "https://i.imgur.com/9pWQJSd.png" alt = "Pants">
   </div>
    <div class="item say">
     <h1 class="words">Jacket</h1>
     <img src = "https://i.imgur.com/5Y6UkLd.png" alt = "Jacket">
   </div>
  </div>
</div>

<!-- Folder5/Places -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/dMMkTt7.png" alt = "Places Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi"> &times;</span>
       <div class="item say">
     <h1 class="words">Home</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Home">
   </div>
    <div class="item say">
     <h1 class="words">School</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "School">
   </div>
    <div class="item say">
     <h1 class="words">Hospital</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Hospital">
   </div>
  </div>
</div> 

<!-- Folder6/People -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/Xy1Wvlz.png" alt = "People Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="words">Mom</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Mom">
   </div>
    <div class="item say">
     <h1 class="words">Dad</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Dad">
   </div>
    <div class="item say">
     <h1 class="words">Teacher</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Teacher">
   </div>
  </div>
</div>

<!-- Folder8/Emergency -->
 <div class= "myBtn_multi">
     <img src = "https://i.imgur.com/BU9oclh.png" alt = "Emergency Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
         <div class="item say">
     <h1 class="words">Help</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Help">
   </div>
    <div class="item say">
     <h1 class="words">Call 911</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Call 911">
   </div>
    <div class="item say">
     <h1 class="words">Stop</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Stop">
   </div>
  </div>
</div>

<div class="item say">
    <h1 class="words">Who</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Who">
   </div>
   <div class="item say">
     <h1 class="words">What</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "What">
   </div>
   <div class="item say">
     <h1 class="words">Why</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Why">
   </div>
   <div class="item say">
     <h1 class="words">When</h1>
     <img src = "https://i.imgur.com/4jwKpOp.pngp" alt = "When">
   </div>
   <div class="item say">
     <h1 class="words">How</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "How">
   </div>
   <div class="item say">
     <h1 class="words">Where</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Where">
   </div>
   <div class="item say say">
     <h1 class="words">Want</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Want">
   </div>
   <div class="item say">
     <h1 class="words">Time</h1>
     <img src = "https://i.imgur.com/4jwKpOp.png" alt = "Time">
  </div>
    <div class="item say">
     <h1 class="words">Love</h1>
     <img src = "https://i.imgur.com/nxI4WbJ.png" alt = "Love">
   </div>



    </div>
</template>

