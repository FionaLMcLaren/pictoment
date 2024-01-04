<script setup>
  import { store } from '../store.js'
  import { ref } from 'vue'

</script>

<template>
  <div>
      <b-button-group size="lg">
        <b-button
          @click = "save()"
        >
          Save
        </b-button>

        <b-button
          @click = "clear()"
        >
          Clear
        </b-button>
    </b-button-group>
  </div>
</template>

<script>
  function save() {
    let canvas = document.getElementById("pixcanvas");

    const canvasImageEl = document.createElement('a');
    canvasImageEl.setAttribute("href", canvas.toDataURL("image/png", 1));
    canvasImageEl.setAttribute("download", "pictoment");
    canvasImageEl.click();
    canvasImageEl.remove();
  }

  function clear() {
    let canvas = document.getElementById("pixcanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

</script>

