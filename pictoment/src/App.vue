<script setup>
  import ToolPanel from './lib/Tool/ToolPanel.vue'
  import PalettePanel from './lib/Palette/PalettePanel.vue'
  import CanvasPanel from './lib/Canvas/CanvasPanel.vue'
  import Canvas from './lib/Canvas/Canvas.vue'

  import CanvasTab from './components/Tabs/CanvasTab.vue'

  import { store } from './store.js'

  store.setDefaults("Brush", 0)
</script>

<template>
  <header>
  </header>

  <main>
    <b-container>   
      
      <CanvasTab>
      <Canvas />
    </CanvasTab>

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
    </b-container>
  </main>
</template>
