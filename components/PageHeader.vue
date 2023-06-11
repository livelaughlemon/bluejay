<script setup>
import Wordmark from './branding/Wordmark.vue'
</script>

<script>
export default {
  data: () => ({
    status: "Loading server status...",
  }),

  mounted() {
    this.getStatus()
    this.interval = setInterval(() => this.getStatus(), 2000);
  },

  methods: {
    async getStatus() {
      const statusapi = `https://api.orchidmc.me/v2/minecraft/status/play.orchidmc.me/25565`
      var response = await (await fetch(statusapi)).json()
      if (response.code === "ECONNREFUSED") {
        this.status = "The server is offline."
      } else if (response.code === "ECONNRESET") {
        this.status = "The server is offline."
      } else if (response.code === "") {
        this.status = "The server is offline."
      } else if (response.players.online === "") {
        this.status = "The server is offline."
      } else {
        this.status = response.players.online + " player(s) online"
      }
    }
  }
}
</script>

<template>
  <div class="header">
    <div class="headerContent">
      <Wordmark />
      <div class="headerLinksArea">
        <a class="headerLink" href="https://discord.orchidmc.me">Discord</a>
        <a class="headerLink" href="#vote">Vote</a>
        <a class="headerLink" href="https://s.orchidmc.me/apply">Apply</a>
        <a class="headerLink" href="https://store.orchidmc.me">Store</a>
      </div>
      <div class="statusArea">
        <span class="status">{{ status }}</span>
      </div>
    </div>
  </div>
</template>