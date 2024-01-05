<script setup>
  import { store } from '../../store.js'
</script>

<template>
  <div>
    <b-form-group label="colours" v-slot="{ ariaDescribedby }">
      <b-form-radio 
        v-for="(colourBtn, idx) in store.palette.colours"
        :aria-describedby="ariaDescribedby" 
        name="colours" 
        class="col-op"
        :value="store.palette.colours[idx]"
        :style="{backgroundColor: store.palette.colours[idx] }"
        v-on:change = "store.selectColour(colourBtn)">
        {{ store.palette.colours[idx] }}
      </b-form-radio>
    </b-form-group>
  </div>
</template>

<script>
  
</script>
