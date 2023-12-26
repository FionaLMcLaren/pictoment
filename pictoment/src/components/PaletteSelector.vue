<script setup>
  import { store } from '../store.js'
  import { ref } from 'vue'

  const paletteBtns = ref
    ([
      { name: 'peach', state: true}, 
      { name: 'cherry', state: false},
      { name: 'orange', state: false},
      { name: 'grape', state: false},
      { name: 'banana', state: false},
      { name: 'plum', state: false},
      { name: 'blueberry', state: false},
      { name: 'kiwi', state: false},
      { name: 'fruit salad', state: false },
      { name: 'berries', state: false },
      { name: 'tropical mix', state: false },
    ])

</script>

<template>
  <div>
      <b-dropdown >
        <template #button-content>
          <span id="paletteSelectedName">{{store.palette.name}}</span>
        </template>
        
        <b-dropdown-item
          v-for="(paletteBtn, idx) in paletteBtns"
          :key="idx"
          :pressed.sync="paletteBtn.state"
          @click = "store.selectPalette(paletteBtn, paletteBtns)"
        >
          {{ paletteBtn.name }}
        </b-dropdown-item>
    </b-dropdown>
  </div>
</template>