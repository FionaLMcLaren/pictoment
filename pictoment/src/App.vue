<script setup>
  import ToolPanel from './components/ToolPanel.vue'
  import PalettePanel from './components/PalettePanel.vue'
  import Canvas from './components/Canvas.vue'
  import { store } from './store.js'

  store.setDefaults("Brush", 0)
</script>

<template>
  <header>
  </header>

  <main>
    <b-container fluid>
      <b-row >
          <PalettePanel />
      </b-row>

      <b-row >
          <ToolPanel />
      </b-row>

      <b-row>
          <Canvas />
      </b-row>

    </b-container>
  </main>
</template>
