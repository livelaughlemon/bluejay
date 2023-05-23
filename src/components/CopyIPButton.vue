<script>
export default {
  data: () => ({
    text: "Copy IP",
  }),
  methods: {
    async changeButtonText() {
      this.text = "Copied IP!"
      setTimeout(() => {
        this.text = "Copy IP"
      }, 3000);
    }
  }
}
</script>

<template>
  <a class="btn" id="copyIP" @click="changeButtonText()" onclick="navigator.clipboard.writeText('play.orchidmc.me');">
    {{ text }}
  </a>
</template>