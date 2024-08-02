<script setup>
  import { store } from '../../store.js'
  import { ref } from 'vue'

</script>

<template>
  <div>
    {{ store.colour }}
    {{ store.tool }}
    {{ store.size }}

  </div>
</template>