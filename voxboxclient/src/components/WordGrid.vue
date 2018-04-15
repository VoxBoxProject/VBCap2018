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

<div class="Vocabulary" id="button">
  <!-- Vocab is for the CSS
      button is for JS, opens up modals-->
      <div class="item say">
        <h1 class="words">Again</h1>
        <img src="../assets/0058-500x500.png" alt = "Again">
      </div>
      <div class="item say">
        <h1 class="words">All</h1>
        <img src="../assets/0058-500x500.png" alt = "All">
      </div>
       <div class="item say">
        <h1 class="words">Goodbye</h1>
        <img src="../assets/0058-500x500.png" alt = "Goodbye">
      </div>
      <div class="item say">
        <h1 class="words">Finished</h1>
        <img src="../assets/Say.png" alt = "Finished">
      </div>


<!-- Folder1/Things -->
  <div class= "myBtn_multi">
    <h1 class="words">Things Folder</h1>    
     <img src = "../assets/Things.png" alt = "Things Folder">
   </div>

 <!-- The Modal -->
<div class="modal modal_multi">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi"> &times; </span>
       <div class="item say">
     <h1 class="words">Toys</h1>
     <img src = "../assets/0058-500x500.png" alt = "Toys">
   </div>
    <div class="item say">
     <h1 class="words">Box</h1>
     <img src = "../assets/0058-500x500.png" alt = "Box">
   </div>
    <div class="item say">
     <h1 class="words">Food</h1>
     <img src = "../assets/0058-500x500.png" alt = "Food">
   </div>
  </div>
</div> 

<!-- Folder2/Action -->
 <div class= "myBtn_multi">
   <h1 class="words">Action Folder</h1>    
     <img src = "../assets/0058-500x500.png" alt = "Action Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="words">Say</h1>
     <img src = "../assets/Say.png" alt = "Say">
   </div>
  <div class="item say">
     <h1 class="words">Sing</h1>
     <img src = "../assets/Sing.png" alt = "Sing">
   </div>
    <div class="item say">
     <h1 class="words">Stop</h1>
     <img src = "../assets/Stop.png" alt = "Stop">
   </div>
  </div>
</div>

<!-- Folder3/Clothes -->
 <div class= "myBtn_multi">
   <h1 class="words">Clothes Folder</h1>    
     <img src = "../assets/Clothes.png" alt = "Clothes Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="words">Shirt</h1>
     <img src = "../assets/0058-500x500.png" alt = "Shirt">
   </div>
    <div class="item say">
     <h1 class="words">Pants</h1>
     <img src = "../assets/0058-500x500.png" alt = "Pants">
   </div>
    <div class="item say">
     <h1 class="words">Jacket</h1>
     <img src = "../assets/0058-500x500.png" alt = "Jacket">
   </div>
  </div>
</div>

<!-- Folder5/Places -->
 <div class= "myBtn_multi">
   <h1 class="words">Places Folder</h1>
     <img src = "../assets/Places.png" alt = "Places Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi"> &times;</span>
       <div class="item say">
     <h1 class="words">Home</h1>
     <img src = "../assets/0058-500x500.png" alt = "Home">
   </div>
    <div class="item say">
     <h1 class="words">School</h1>
     <img src = "../assets/0058-500x500.png" alt = "School">
   </div>
    <div class="item say">
     <h1 class="words">Hospital</h1>
     <img src = "../assets/0058-500x500.png" alt = "Hospital">
   </div>
  </div>
</div> 

<!-- Folder6/People -->
 <div class= "myBtn_multi">
   <h1 class="words">People Folder</h1>
     <img src = "../assets/People.png" alt = "People Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="words">Mom</h1>
     <img src = "../assets/0058-500x500.png" alt = "Mom">
   </div>
    <div class="item say">
     <h1 class="words">Dad</h1>
     <img src = "../assets/0058-500x500.png" alt = "Dad">
   </div>
    <div class="item say">
     <h1 class="words">Teacher</h1>
     <img src = "../assets/0058-500x500.png" alt = "Teacher">
   </div>
  </div>
</div>

<!-- Folder8/Emergency -->
 <div class= "myBtn_multi">
   <h1 class="words">Emergency Folder</h1>
     <img src = "../assets/0058-500x500.png" alt = "Emergency Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
         <div class="item say">
     <h1 class="words">Help</h1>
     <img src = "../assets/0058-500x500.png" alt = "Help">
   </div>
    <div class="item say">
     <h1 class="words">Call 911</h1>
     <img src = "../assets/0058-500x500.png" alt = "Call 911">
   </div>
    <div class="item say">
     <h1 class="words">Stop</h1>
     <img src = "../assets/Stop.png" alt = "Stop">
   </div>
  </div>
</div>

<div class="item say">
    <h1 class="words">Who</h1>
     <img src = "../assets/0058-500x500.png" alt = "Who">
   </div>
   <div class="item say">
     <h1 class="words">What</h1>
     <img src = "../assets/0058-500x500.png" alt = "What">
   </div>
   <div class="item say">
     <h1 class="words">Why</h1>
     <img src = "../assets/0058-500x500.png" alt = "Why">
   </div>
   <div class="item say">
     <h1 class="words">When</h1>
     <img src = "../assets/0058-500x500.png" alt = "When">
   </div>
   <div class="item say">
     <h1 class="words">How</h1>
     <img src = "../assets/0058-500x500.png" alt = "How">
   </div>
   <div class="item say">
     <h1 class="words">Where</h1>
     <img src = "../assets/0058-500x500.png" alt = "Where">
   </div>
   <div class="item say say">
     <h1 class="words">Want</h1>
     <img src = "../assets/0058-500x500.png" alt = "Want">
   </div>
   <div class="item say">
     <h1 class="words">Time</h1>
     <img src = "../assets/0058-500x500.png" alt = "Time">
  </div>
    <div class="item say">
     <h1 class="words">Love</h1>
     <img src = "../assets/0058-500x500.png" alt = "Love">
   </div>

    </div>
    </div>
</template>

