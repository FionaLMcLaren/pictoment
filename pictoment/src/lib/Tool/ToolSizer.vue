<script setup>
  import { store } from '../../store.js'
  import { ref } from 'vue'

  const sizeOps = ref
    ([
      { name: 'sm', value: 1, state: true }, 
      { name: 'md', value: 2, state: false },
      { name: 'lg', value: 3, state: false },
      { name: 'xl', value: 5, state: false }
    ])

</script>

<template>
  <div>


    <b-button-group size="lg">
        <b-button
        v-for="(sizeOp, idx) in sizeOps"
          :key="idx"
          :pressed.sync="sizeOp.state"
          @click = "store.selectSize(sizeOp, sizeOps)"
        >
          {{ sizeOp.name }}
        </b-button>
    </b-button-group>

  </div>
</template>