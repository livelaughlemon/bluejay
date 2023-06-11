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

<style>
.header {
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: var(--bg1-50);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  position: fixed;
  top: 0;
  z-index: 1;
}

.headerContent {
  width: 100%;
  max-width: 1024px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  align-items: center;

  text-shadow: 0px 0px 20px #000000;
}

.headerLinksArea {
  margin-left: 10px;
  margin-right: 10px;
  flex-grow: 5;
}

.headerLink {
  margin-left: 5px;
  margin-right: 5px;

  color: var(--txt1);
  font-family: var(--font1);
  font-weight: 400;
  font-size: 16px;

  border-radius: 5px;

  text-decoration: none;
  transition: 0.1s;
}

.headerLink:hover {
  color: var(--txt3);
  transition: 0.1s;
}

.pageHeader {
  padding-top: 75px;
  padding-bottom: 25px;
  background-image: url("/assets/header.webp");
  background-position: bottom;
}

.pageHeader.noImage {
  background-image: none !important;
}

.pageHeaderContent {
  text-align: left;
  max-width: 1024px;
  margin: auto;
}

.pageHeaderItem {
  color: var(--txt1);
  font-family: var(--font1);
  font-weight: 400;
  font-size: 16px;
  padding: 60px;
  max-width: 500px;
}

.pageHeaderItemText {
  line-height: 1.5;
  text-shadow: 0px 0px 20px #000000;
}

.pageHeaderItemContainer {
  display: flex;
  align-items: center;
}

.statusArea {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.status {
  color: var(--txt1);
  font-family: var(--font1);
  font-size: 16px;
}
</style>