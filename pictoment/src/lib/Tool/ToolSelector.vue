<script setup>
  import { store } from '../../store.js'
  import { ref } from 'vue'

  const toolBtns = ref
    ([
      { name: 'Brush', state: true }, 
      { name: 'Eraser', state: false }
    ])

</script>

<template>
  <div>
      <b-button-group size="lg">
        <b-button
          v-for="(toolBtn, idx) in toolBtns"
          :key="idx"
          :pressed.sync="toolBtn.state"
          @click = "store.selectTool(toolBtn, toolBtns)"
        >
          {{ toolBtn.name }}
        </b-button>
    </b-button-group>
  </div>
</template>