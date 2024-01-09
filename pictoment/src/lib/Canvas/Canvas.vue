<script setup>
  import { store } from '../../store.js'
  import { onMounted, ref } from 'vue'
</script>

<template>
  <div class=" position-relative">
    <div 
      id="guide"
      ref="guide"
      class="position-absolute left-0 top-0 d-none bg-primary h-100 w-100 opactiy-75">
    </div>
    <canvas 
      id="pixcanvas"
      ref="pixcanvas" 
      width="480" 
      height="480" 
      class="bg-white object-fit-scale border rounded"
    ></canvas>
  </div>
</template>

<script>
  export default {
    mounted() {
      const canvas = this.$refs.pixcanvas;

      const canvasWidth = canvas.width;

      const ctx = canvas.getContext("2d");
      const bounding = canvas.getBoundingClientRect();
      var drawing = false;

      function paint(x, y, cellCount) {
          let cellSize = (canvasWidth / cellCount);
          ctx.fillStyle = store.colour;
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }

      function erase(x, y, cellCount) {
          let cellSize = (canvasWidth / cellCount);
          ctx.clearRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }

      canvas.addEventListener('mousedown', (el) => { 
        drawing = true;
      })

      canvas.addEventListener('mouseup', (el) => { 
        drawing = false;
      })

      canvas.addEventListener('mousemove', (el) => {
        var cellCount = canvasWidth / (15 * store.size); 

        var x = el.clientX - bounding.left;
        var y = el.clientY - bounding.top;

        x = Math.floor(cellCount * x / canvas.clientWidth);
        y = Math.floor(cellCount * y / canvas.clientHeight);

        if (drawing) {
          console.log(x, y);
          if (store.tool == "Brush") {
            paint(x, y, cellCount);
          }
          if (store.tool == "Eraser") {
            erase(x, y, cellCount);
          }
        }
      })
    }


  }

</script>