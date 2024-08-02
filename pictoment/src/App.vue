<script setup>
  import ToolPanel from './lib/Tool/ToolPanel.vue'
  import PalettePanel from './lib/Palette/PalettePanel.vue'
  import CanvasPanel from './lib/Canvas/CanvasPanel.vue'
  import TaskPanel from './lib/Taskbar/TaskPanel.vue' 
  import Canvas from './lib/Canvas/Canvas.vue'

  import CanvasTab from './components/Tabs/CanvasTab.vue'
  import SideTab from './components/Tabs/SideTab.vue'
  import TaskBar from './components/Taskbar/TaskBar.vue'

  import { store } from './store.js'

  store.setDefaults("Brush", 0)
</script>

<template>
  <header>
  </header>

  <main>
    <b-container fluid class="mb-5">   
      <b-row class="align-items-center">

        <b-col>
          <SideTab />
        </b-col>

        <b-col>
          <CanvasTab>
            <Canvas />
          </CanvasTab>
        </b-col>

        <b-col>
          <SideTab info="true"/>
        </b-col>
    
      </b-row>

    <TaskBar>
      <TaskPanel />
    </TaskBar>
    </b-container>
  </main>
</template>
