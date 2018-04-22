<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<template>
  <transition name="modal-fade">
    <div v-for="(folder) in $store.state.Folders" 
        class="myBtn_multi">
      <div v-for="(words) in folder"
      class="modal-content"
        role="dialog">
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal">
              x
            </button>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot v-for="(word) in words"name="item say">
               <h1 class="words">{{ word.value }}</h1>
               <img v-bind:src="'/img/' + word.src"  v-bind:alt="word.value" />
           </slot>
        </section>
    </div>
    </div>
  </transition>
</template>

<style>
 .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>
