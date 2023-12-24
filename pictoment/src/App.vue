<script setup>
  import ToolPanel from './components/ToolPanel.vue'
  import Canvas from './components/Canvas.vue'
  import { store } from './store.js'
</script>

<template>
  <header>
  </header>

  <main>
    <b-container fluid>
      <b-row >
        <b-col>
          <ToolPanel />
        </b-col>

        <b-col>
          {{ store.tool }}
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <Canvas />
        </b-col>
      </b-row>

    </b-container>
  </main>
</template>
