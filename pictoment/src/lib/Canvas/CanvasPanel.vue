<script setup>
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

  function toggleGrid() {
    let grid = document.getElementById("guide");
    grid.classList.toggle("d-none");
  }

</script>


<template>
  <div id="canvas-con">
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

        
        <b-button
          @click = "toggleGrid()"
        >
          Toggle grid
        </b-button>
    </b-button-group>
  </div>
</template>


