<script setup>
import SmallLogo from './SmallLogo.vue'
</script>

<script>
export default {
  methods: {
    goHome() {
      window.location = '/';
    }
  }
}
</script>

<template>
  <div class="wordmark" @click="goHome()">
    <SmallLogo />
    <span class="serverName">Orchid Towny</span>
  </div>
</template>