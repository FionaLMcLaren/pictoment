<script setup>
  import ToolSelector from './ToolSelector.vue'
  import ToolSizer from './ToolSizer.vue'

</script>

<template>
  <div>
    <b-row>
        <b-col>
          <ToolSelector />
        </b-col>

        <b-col>
          <ToolSizer />
        </b-col>
      </b-row>
  </div>
</template>