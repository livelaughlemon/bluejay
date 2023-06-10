<template>
  <div class="footer">
    <div class="footerContent">
      <span class="footerBody">
        © 2022-2023 Orchid Development • This website is <a class="ossLink" href="https://github.com/orchidtowny/bluejay"
          target="_blank" rel="noopener noreferrer">open source</a> on Github. • play.orchidmc.me
      </span>
    </div>
  </div>
</template>

<style>

.footer {
  padding-bottom: 30px;
  padding-top: 30px;

  width: 100%;
  display: flex;
  justify-content: center;
}

.footerBody {
  font-family: var(--font1);
  color: var(--txt1);
  font-size: 16px;
  font-variation-settings: "wght" 500;

  text-align: center;
  margin: auto;
}

.footerContent {
  width: 100%;
  max-width: 1024px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  align-items: center;
}

</style>