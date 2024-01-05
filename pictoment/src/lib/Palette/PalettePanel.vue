<script setup>
  import PaletteSelector from './PaletteSelector.vue'
  import PaletteSwatch from './PaletteSwatch.vue'

</script>

<template>
  <div>
    <b-row>
        <b-col>
          <PaletteSelector />
        </b-col>

        <b-col>
          <PaletteSwatch />
        </b-col>
      </b-row>
  </div>
</template>