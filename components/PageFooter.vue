<template>
  <div class="footer">
    <div class="footerContent">
      <div class="footerTop">
        © 2022-2023 Orchid Development &bull; This website is <a class="footerLink"
          href="https://github.com/orchidtowny/bluejay" target="_blank" rel="noopener noreferrer">open source</a> on
        Github. &bull; play.orchidmc.me
      </div>
      <div class="footerBottom">
        <a class="socialLink slFirst" href="https://discord.orchidmc.me">
          Discord
        </a>
        &bull;
        <a class="socialLink" href="https://www.instagram.com/orchidtowny">
          Instagram
        </a>
        &bull;
        <a class="socialLink" href="https://www.youtube.com/@orchid-towny">
          YouTube
        </a>
        &bull;
        <a class="socialLink" rel="me" href="https://eepy.zone/@orchid">
          Fediverse
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.slFirst {
  margin-left: 0px;
}

.socialIcon {
  margin-right: 6px;
  margin-left: 12px;
}

.socialLink,
.footerBottom {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-grow: 0;
  cursor: pointer;
}

.socialLink {
  font-weight: 600;
}

.footerTop {
  margin-bottom: 10px;
  text-align: center;
  font-family: var(--font1);
}

.footerBottom {
  margin-top: 10px;
  text-align: center;
  font-family: var(--font1);
}

.footer {
  max-width: 1024px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.footerLink {
  color: var(--accent1);
  text-decoration: underline !important;
  border-radius: 5px;
}
</style>
