<script setup>
  import { store } from '../../store.js'
  import { ref } from 'vue'

  const sizeOps = ref
    ([
      { name: 'sm', value: 1 }, 
      { name: 'md', value: 2 },
      { name: 'lg', value: 3 },
      { name: 'xl', value: 5 }
    ])

</script>

<template>
  <div>
    <b-form-group label="sizes" v-slot="{ ariaDescribedby }">
      <b-form-radio 
        v-for="(sizeOp, idx) in sizeOps"
        :aria-describedby="ariaDescribedby" 
        name="sizes" 
        :value="sizeOp.value"
        v-on:change = "store.selectSize(sizeOp.value)">
        {{ sizeOp.name }}
      </b-form-radio>
    </b-form-group>
  </div>
</template>