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

<!-- vocabulary of words is like a data array of name, word, image
 A Vue template could read the array and build the Vocaulary on the fly.
 It would make adding, removing, and managing words slight easier instead of
 copy and pasting html.
-->

<div class="Vocabulary">
      <div class="item say" v-on:click="$store.state.mainSentence += 'Again '">
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


<!-- Folder1/People -->
  <div class= "myBtn_multi">
    <h1 class="words">People Folder</h1>    
     <img src = "../assets/People.png" alt = "People Folder">
   </div>

 <!-- The Modal -->
<div class="modal modal_multi">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi"> &times; </span>
       <div class="item say">
     <h1 class="words">Mom</h1>
     <img src = "../assets/Mom.png" alt = "Mom">
   </div>
    <div class="item say">
     <h1 class="words">Dad</h1>
     <img src = "../assets/Dad.png" alt = "Dad">
   </div>
    <div class="item say">
     <h1 class="words">Friend</h1>
     <img src = "../assets/Brother : Sister.png" alt = "Friend">
   </div>
     <div class="item say">
     <h1 class="words">Teacher</h1>
     <img src = "../assets/Teacher.png" alt = "Teacher">
   </div>
  </div>
</div> 

<!-- Folder2/Feelings -->
 <div class= "myBtn_multi">
   <h1 class="words">Feelings Folder</h1>    
     <img src = "../assets/Happy.png" alt = "Feelings Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="words">Happy</h1>
     <img src = "../assets/Happy.png" alt = "Happy">
   </div>
  <div class="item say">
     <h1 class="words">Sad</h1>
     <img src = "../assets/Sad.png" alt = "Sad">
   </div>
  </div>
</div>

<!-- Folder3/Actions -->
 <div class= "myBtn_multi">
   <h1 class="words">Actions Folder</h1>    
     <img src = "../assets/Go.png" alt = "Actions Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
       <div class="item say">
     <h1 class="words">Come</h1>
     <img src = "../assets/Come.png" alt = "Come">
   </div>
    <div class="item say">
     <h1 class="words">Look</h1>
     <img src = "../assets/Look.png" alt = "Look">
   </div>
    <div class="item say">
     <h1 class="words">Read</h1>
     <img src = "../assets/Read.png" alt = "Read">
   </div>
     <div class="item say">
     <h1 class="words">Drink</h1>
     <img src = "../assets/Drink.png" alt = "Drink">
   </div>
     <div class="item say">
     <h1 class="words">Eat</h1>
     <img src = "../assets/Eat.png" alt = "Eat">
   </div>
     <div class="item say">
     <h1 class="words">Go</h1>
     <img src = "../assets/Go.png" alt = "Go">
   </div>
   <div class="item say">
     <h1 class="words">Sleep</h1>
     <img src = "../assets/Sleep.png" alt = "Sleep">
   </div>
     <div class="item say">
     <h1 class="words">Sit</h1>
     <img src = "../assets/Sit.png" alt = "Sit">
   </div>
     <div class="item say">
     <h1 class="words">Stand Up</h1>
     <img src = "../assets/Stand.png" alt = "Stand UP">
   </div>
     <div class="item say">
     <h1 class="words">Play</h1>
     <img src = "../assets/Play.png" alt = "Play">
   </div>
     <div class="item say">
     <h1 class="words">Jump</h1>
     <img src = "../assets/Jump.png" alt = "Jump">
   </div>
   <div class="item say">
     <h1 class="words">Close</h1>
     <img src = "../assets/Close.png" alt = "Close">
   </div>
   <div class="item say">
     <h1 class="words">Run</h1>
     <img src = "../assets/Run.png" alt = "Run">
   </div>
   <div class="item say">
     <h1 class="words">Wash</h1>
     <img src = "../assets/Wash.png" alt = "Wash">
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

<!-- Folder8/Emergency -->
 <div class= "myBtn_multi">
   <h1 class="words">Emergency Folder</h1>
     <img src = "../assets/Help.png" alt = "Emergency Folder">
   </div>
<!-- The Modal -->
<div class= "modal modal_multi" >
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close close_multi">&times;</span>
         <div class="item say">
     <h1 class="words">Help</h1>
     <img src = "../assets/Help.png" alt = "Help">
   </div>
    <div class="item say">
     <h1 class="words">Stop</h1>
     <img src = "../assets/Stop.png" alt = "Stop">
   </div>
  </div>
</div>

</div>
</template>

