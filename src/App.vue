<script setup>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import CopyIPButton from './components/CopyIPButton.vue'
import Button from './components/Button.vue'
import Heading from './components/Heading.vue'
import Card from './components/Card.vue'
import VotingSite from './components/VotingSite.vue'
import Supporter from './components/Supporter.vue'
</script>

<template>
  <div>
    <div class="pageHeader">
      <PageHeader />
      <div class="pageHeaderContent">
        <div class="pageHeaderItemContainer">
          <div class="pageHeaderItem">
            <span class="pageHeaderItemText">
              Welcome to Orchid! We’re a community built on the hope to make Minecraft a more accepting and comfortable place, while still offering the best non-pay-to-win gameplay possible. We have many features to offer, including technology, magic, quests, custom mobs, and advancements.
            </span>
            <br><br>
            <CopyIPButton />
            <Button href="https://discord.orchidmc.me">Join us on Discord</Button>
          </div>
        </div>
      </div>
    </div>
    <div id="features" class="pageContent">
      <div class="pageItemContainer">
        <Heading>Some of our Features</Heading>
        <div class="pageItemContent">
          <Card icon="sf" title="Slimefun" body="Here on Orchid we have a plugin called Slimefun, which is a plugin similar to a technology modpack for Spigot. We don’t just have the basics of Slimefun though, we have several addons to make your Slimefun adventure more challenging. Once you finish one thing, you can almost always find another with our Slimefun setup!"/>
          <Card icon="ty" title="Towny" body="Using Towny, you can build the empire you've always wanted to. Start up towns and build with other players, and grow your own nation with the help of others. Attack your enemies in flag-based wars, or become the next ally to a great nation. It’s all your choice with Towny!"/>
          <Card icon="nptw" title="Not Pay-to-Win" body="We’re tired of servers popping up left and right with “donate to unban” policies, lenient moderators, and weeks of work for $15. That’s why we’ve done as much as we can to not be that. All of our supporter ranks only offer things available in our survival ranks, excluding cosmetic perks like icons in chat."/>
          <Card icon="ca" title="Custom & Advanced" body="With our years of experience in this game, we’ve been able to craft a unique and custom experience, including some of our own plugins and unique ideas. Alongside that, the support we’ve received over the past few months has allowed us to further improve the server and deliver a lag-free experience and premium plugins that improves the lives of the staff and players."/>
        </div>
      </div>
      <div id="vote" class="pageItemContainer">
        <Heading>Vote for Orchid</Heading>
        <div class="pageItemContent">
          <VotingSite icon="go" link="https://minecraft.buzz/vote/5661">minecraft.buzz</VotingSite>
          <VotingSite icon="go" link="https://topminecraftservers.org/vote/29126">topminecraftservers.org</VotingSite>
          <VotingSite icon="go" link="https://www.serverpact.com/vote-47152">serverpact.com</VotingSite>
          <VotingSite icon="go" link="https://minecraftservers.org/vote/640046">minecraftservers.org</VotingSite>
          <VotingSite icon="go" link="https://craftlist.org/orchid#vote">craftlist.org</VotingSite>
          <VotingSite icon="go" link="https://minecraft-mp.com/server/308552/vote/">minecraft-mp.com</VotingSite>
          <VotingSite icon="go" link="https://www.planetminecraft.com/server/orchid-towny/vote/">planetminecraft</VotingSite>
          <VotingSite icon="go" link="https://mclist.io/server/63514/vote">mclist.io</VotingSite>
        </div>
      </div>
      <div id="supporters" class="pageItemContainer">
        <Heading>Our Supporters</Heading>
        <div class="pageItemContent pageItemContentSupporters">
          <Supporter name="xxLightning13x" />
          <Supporter name="Darksyde666" />
          <Supporter name="Jota_byte" />
          <Supporter name="umvoon" />
          <Supporter name="Vrixll" />
          <Supporter name="TheGreatDayton" />
          <Supporter name="BasicBee_" />
          <Supporter name="TheGreatFlyBoy" />
          <Supporter name="Starry_Chu" />
          <Supporter name="Goooop00" />
          <Supporter name="UnfadingAut0" />
          <Supporter name="Bella_York" />
          <Supporter name="BlahBlah375" />
          <Supporter name="_Glu10_" />
          <Supporter name="cozychills" />
          <Supporter name="Woots_" />
          <Supporter name="LemonHound" />
          <Supporter name="Legalis" />
          <Supporter name="A1eq" />
          <Supporter name="Ryash" />
          <Supporter name="Zinguin" />
          <Supporter name="Uby_" />
          <Supporter name="charwaterlily" />
          <Supporter name="TechnicalNitwit" />
          <Supporter name="Breetherusski__" />
          <Supporter name="Shxwk" />
          <Supporter name="Matrixes420" />
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>
