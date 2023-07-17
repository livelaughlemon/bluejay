<template>
  <div class="footer">
    <div class="footerContent">
      <div class="footerTop">
        © 2022-2023 Orchid Development &bull; This website is <a class="footerLink"
          href="https://github.com/orchidtowny/bluejay" target="_blank" rel="noopener noreferrer">open source</a> on
        Github. &bull; play.orchidmc.me
      </div>
      <div class="footerBottom">
        <a class="socialLink" href="https://discord.orchidmc.me">
          <img class="socialIcon" height="12px" width="auto" src="/assets/icon-discord.svg" />
          Discord
        </a>
        <a class="socialLink" href="https://www.instagram.com/orchidtowny">
          <img class="socialIcon" height="12px" width="auto" src="/assets/icon-instagram.svg" />
          Instagram
        </a>
        <a class="socialLink" href="https://www.youtube.com/@orchid-towny">
          <img class="socialIcon" height="12px" width="auto" src="/assets/icon-youtube.svg" />
          YouTube
        </a>
        <a class="socialLink" href="https://tech.lgbt/@orchid">
          <img class="socialIcon" height="12px" width="auto" src="/assets/icon-mastodon.svg" />
          Mastodon
        </a>
      </div>
    </div>
  </div>
</template>

<style>
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