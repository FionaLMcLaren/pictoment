<script setup>
  import { store } from '../../store.js'
</script>

<template>
  <div>
    <b-button-group size="sm" vertical>
        <b-button
          v-for="(colourBtn, idx) in store.palette.colours"
          :key="idx"
          :pressed.sync="colourBtn == store.colour"
          :style="{backgroundColor: colourBtn }"
          @click = "store.selectColour(colourBtn)"
        >
          {{ colourBtn }}
        </b-button>
    </b-button-group>
  </div>
</template>

<script>
  
</script>
