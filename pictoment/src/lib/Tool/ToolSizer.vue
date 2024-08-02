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


    <b-button-group size="lg" vertical class="tool-sizer-container gap-1 m-2">
        <b-button class="tool-sizer-action"
        v-for="(sizeOp, idx) in sizeOps"
          :key="idx"
          :pressed.sync="sizeOp.state"
          @click = "store.selectSize(sizeOp, sizeOps)"
        >
        <span>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
          <path 
            d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z" 
            fill="currentColor"/> 
          </svg>
        </span>

          {{ sizeOp.name }}
        </b-button>
    </b-button-group>

  </div>
</template>