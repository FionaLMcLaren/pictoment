<script setup>
  import ToolPanel from './components/ToolPanel.vue'
  import PalettePanel from './components/PalettePanel.vue'
  import CanvasPanel from './components/CanvasPanel.vue'
  import Canvas from './components/Canvas.vue'
  import { store } from './store.js'

  store.setDefaults("Brush", 0)
</script>

<template>
  <header>
  </header>

  <main>
    <b-container>

      <b-row>
        <b-row >
            <PalettePanel />
        </b-row>

        <b-row>
          <b-col >
              <ToolPanel />
          </b-col>

          <b-col>
              <CanvasPanel />
          </b-col>
        </b-row>

      </b-row>

      <b-row>
          <Canvas />
      </b-row>

    </b-container>
  </main>
</template>
