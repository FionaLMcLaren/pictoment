<script setup>
  import { store } from '../store.js'
  import { onMounted, ref } from 'vue'
</script>

<template>
  <div>
    <canvas 
      id="pixcanvas"
      ref="pixcanvas" 
      width="320" 
      height="320" 
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

      function draw(x, y) {
          ctx.fillStyle = "red";
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
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
          draw(x, y);
        }

        console.log(x,y);
      })
    }


  }

</script>