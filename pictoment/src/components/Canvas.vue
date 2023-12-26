<script setup>
  import { store } from '../store.js'
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
      width="720" 
      height="720" 
      class="bg-white"
    ></canvas>
  </div>
</template>

<script>
  export default {
    mounted() {
      const canvas = this.$refs.pixcanvas;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const cellCount = canvasWidth / 15;
      const cellSize = canvasWidth / cellCount;  

      const ctx = canvas.getContext("2d");
      const bounding = canvas.getBoundingClientRect();
      var drawing = false;

      function paint(x, y) {
          ctx.fillStyle = store.colour;
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }

      function erase(x, y) {
          ctx.clearRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }

      canvas.addEventListener('mousedown', (el) => { 
        drawing = true;
        console.log(drawing);
      })

      canvas.addEventListener('mouseup', (el) => { 
        drawing = false;
        console.log(drawing);
      })

      canvas.addEventListener('mousemove', (el) => {
        var x = el.clientX - bounding.left;
        var y = el.clientY - bounding.top;

        console.log(x,y)

        x = Math.floor(cellCount * x / canvas.clientWidth);
        y = Math.floor(cellCount * y / canvas.clientHeight);

        if (drawing) {
          if (store.tool == "Brush") {
            paint(x, y);
          }
          if (store.tool == "Eraser") {
            erase(x, y);
          }
        }

        console.log(x,y);
      })
    }


  }

</script>