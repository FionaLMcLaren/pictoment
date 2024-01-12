<script setup>
  import { store } from '../../store.js'
</script>

<template>
  <div>
      <b-dropdown >
        <template #button-content>
          <span id="paletteSelectedName">{{store.palette.name}}</span>
        </template>
        
        <b-dropdown-item
          v-for="(paletteBtn, idx) in store.paletteOps"
          :key="idx"
          @click = "store.selectPalette(paletteBtn,  store.paletteOps)"
        >
          {{ paletteBtn.name }}
        </b-dropdown-item>
    </b-dropdown>
  </div>
</template>