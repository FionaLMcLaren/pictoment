<script setup>
  import { store } from '../../store.js'
  import { onMounted, ref } from 'vue'
</script>

<template>
  <div class="position-relative">
    <canvas 
      id="guide"
      ref="guide"
      width="480" 
      height="480" 
      class="guide position-absolute"
    />
    <canvas 
      id="pixcanvas"
      ref="pixcanvas" 
      width="480" 
      height="480" 
      class="pixcanvas bg-white"
    />
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

      const canvasGrid = this.$refs.guide;
      const gridCtx = canvasGrid.getContext("2d");
      
      function drawGrid(width, height, cellCount) {
        let cellSize = (canvasWidth / cellCount);
        canvasGrid.height = cellSize;
        canvasGrid.width = cellSize;

        for (let x = 0; x < width; x ++) {
          for (let y = 0; y < width; y ++) {
            ctx.moveTo(x, y);
            ctx.strokeStyle = "red";
            ctx.lineWidth = 0.2;
            ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
          }
        }
      }

      drawGrid(canvasWidth, canvasWidth, (canvasWidth / (15 * store.size)));


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