<script setup>
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'
import TownCard from '../components/TownCard.vue'
</script>

<script>

export default {
  data: () => ({
    towns: null,
  }),

  mounted() {
    this.getTownInfo()
    this.interval = setInterval(() => this.getTownInfo(), 10000);
  },

  methods: {
        async getTownInfo() {
            const townyapi = `https://towny.orchidmc.me/towns`
            var response = await (await fetch(townyapi)).json()
            if (response.response === "200") {
                // set stuff -- this is insane i know
                var towns1 = JSON.stringify(response).replace(/\[/g, "");
                var towns2 = towns1.replace(/\]/g, "");
                var towns3 = towns2.replace(/\ /g, "");
                var towns4 = JSON.parse(towns3).towns.split(',');
                this.towns = towns4.sort();
            } else {
                this.status = response.players.online + " player(s) online"
            }
        }
    }
}
</script>

<template>
  <div>
    <div class="pageHeader noImage">
      <PageHeader />
      <div class="pageHeaderContent">
        <div class="pageHeaderItemContainer">
          <div class="pageHeaderItem">
            <span class="pageHeaderItemText">
              <h1>Meet our towns</h1><br>
              <span>
                On Orchid, we have a plugin called Towny which allows you to create and join towns. Below are all of the
                towns that are currently on Orchid.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="features" class="pageContent">
      <div class="pageItemContainer">
        <div class="pageItemContent">

          <TownCard :name="town" v-for="town in towns" />

        </div>
      </div>
    </div>
    <PageFooter />
  </div>
  <NuxtPage />
</template>
