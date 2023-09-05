<script setup>
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'
</script>


<template>
  <div>
    <div class="pageHeader noImage">
      <PageHeader />
      <div class="pageHeaderContent">
        <div class="pageHeaderItemContainer">
          <div class="pageHeaderItem">
            <span class="pageHeaderItemText">
              <h1>We run some stuff...</h1>
              <span>Orchid obviously runs our Minecraft server, but we also use our resources to run other things. All of these services may differ in quality, and may be disabled or limited to prioritize the Minecraft server.</span>
              <br>
              <span>Let us know if you find these tools helpful! It'll motivate us to maintain running these tools and keep them going alongside our server.</span>
              <br><br>
              <Button type="noleft" href="https://status.orchidmc.me/">Status Page</Button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="features" class="pageContent">
      <div class="pageItemContainer">
        <div class="pageItemContent">
          <Card icon="cb" title="cobalt"
            body="cobalt is a no bullshit video and audio downloader. It supports YouTube, TikTok, Vimeo, Reddit, Twitter, Tumblr, Pinterest and more. Our instance has a 12 hour video limit, and is slightly modified from the original cobalt." 
            btn_name="Visit cobalt" btn_href="https://co.blueb.me/"
            btn2_name="Visit Github" btn2_href="https://github.com/wukko/cobalt/"
            />
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
  <NuxtPage />
</template>
