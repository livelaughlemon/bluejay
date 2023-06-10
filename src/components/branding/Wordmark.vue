<script setup>
import SmallLogo from './SmallLogo.vue'
</script>

<template>
  <div class="wordmark">
    <SmallLogo />
    <span class="serverName">Orchid Towny</span>
  </div>
</template>

<style>
.wordmark {
  display: flex;
  align-items: center;

  flex-grow: 0;
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