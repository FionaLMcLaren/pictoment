<script setup>
  import ToolPanel from '../../lib/Tool/ToolPanel.vue'
  import PalettePanel from '../../lib/Palette/PalettePanel.vue'
  import InfoPanel from '../../lib/Info/InfoPanel.vue'
</script>

<template>
<b-container class="tab tab-side" id="side-tab">
  <b-row>
    <b-col>
      <div v-if="info" class="tab-title " id="side-tab-title">
        Info
      </div>

      <div v-else class="tab-title " id="side-tab-title">
        Tool
      </div>
    </b-col>
  </b-row>

    <b-row class="py-2 px-3 mx-auto">
      <div v-if="info">
        <InfoPanel />
      </div>

      <div v-else>
        <ToolPanel />
        <PalettePanel />
      </div>
    </b-row>

</b-container>
</template>

<script>
  export default {
    props: {
      info: {
        type: Boolean
      }
    }
  }
</script>