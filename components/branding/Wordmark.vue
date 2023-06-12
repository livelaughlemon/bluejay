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
  <NuxtLink class="wordmark" to="/">
    <SmallLogo />
    <span class="serverName">Orchid Towny</span>
  </NuxtLink>
</template>

<style>
.wordmark {
  display: flex;
  align-items: center;

  flex-grow: 0;
  cursor: pointer;
}

.serverName {
  color: var(--txt1);
  font-family: var(--font2);
  font-size: 20px;
  font-weight: 700;

  margin-left: 15px;
  margin-right: 15px;
}
</style>