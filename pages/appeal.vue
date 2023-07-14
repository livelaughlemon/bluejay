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
            <!-- Don't steal our form... that would be so weird -->
            <iframe src="https://tally.so/r/w8zORl" width="100%" height="100%" style="height: 950px; border-radius: 10px; margin-top: 10px;" allowtransparency="true" frameborder="0" marginheight="0" marginwidth="0" title="Join the Orchid Staff Team"></iframe>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
  <NuxtPage />
</template>
