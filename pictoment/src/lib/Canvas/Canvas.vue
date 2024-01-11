<script setup>
  import { store } from '../../store.js'
  import { onMounted, ref } from 'vue'
</script>

<template>
  <div class>

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
      class="pixcanvas bg-white position-relative"
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


      const guide = this.$refs.guide;
      const guidectx = guide.getContext("2d");
      
      function drawGrid(cellCount) {
        let cellSize = (canvasWidth / cellCount);

        for (let x = 0; x < canvasWidth; x ++) {
          for (let y = 0; y < canvasWidth; y ++) {
            guidectx.moveTo(x, y);
            guidectx.strokeStyle = "#532ac8";
            guidectx.lineWidth = 0.2;
            guidectx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
          }
        }
      }

      drawGrid((canvasWidth / (15 * store.size)));

    }


  }

</script>