<template>
    <b-button class="taskbar-btn" @click = "action">
        <slot />
    </b-button>
</template>

<script>
export default {
  props: {
    action: {
      type: Function
    }
  }
}
</script>