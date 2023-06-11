<script>
export default {
  data: () => ({
    text: "Copy IP",
    buttonType: "btn ",
  }),
  methods: {
    async changeButtonText() {
      this.text = "Copied IP!"
      this.buttonType = "btn success"
      setTimeout(() => {
        this.text = "Copy IP"
        this.buttonType = "btn undefined"
      }, 3000);
    }
  }
}
</script>

<template>
  <a :class="buttonType" id="copyIP" @click="changeButtonText()" onclick="navigator.clipboard.writeText('play.orchidmc.me');">
    {{ text }}
  </a>
</template>