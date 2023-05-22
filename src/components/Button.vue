<script>
export default {
  props: {
    link: String,
  }
}
</script>

<template>
  <a class="btn" :href="link">
    <slot></slot>
  </a>
</template>