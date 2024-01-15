<script setup>
  import ToolPanel from '../../lib/Tool/ToolPanel.vue'
  import PalettePanel from '../../lib/Palette/PalettePanel.vue'
</script>

<template>
<b-container class="tab tab-side" id="side-tab">
  <b-row>
    <b-col>
        <div class="tab-title " id="side-tab-title">
            Tool
        </div>
    </b-col>
  </b-row>

    <b-row class="py-2 px-3 mx-auto">
       <ToolPanel />
       <PalettePanel />
    </b-row>

</b-container>

  </template>