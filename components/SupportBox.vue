<template>
    <div class="supportBox">
        <div class="supportBoxInner">
            <div class="supportBoxContent">
                <span>Help us pay for the server bills, maintain the server, and develop custom plugins.</span><br>
                <Button type="sparkles translucent nobottom" href="https://store.orchidmc.me"
                    style="margin-top: 20px;">Check out the Store</Button>
            </div>
        </div>
    </div>
</template>

<style>
.supportBox {
  margin-top: 30px;
  background-image: linear-gradient(31deg, #8c70da45, #29816e45);
  border-radius: 20px;
  box-shadow: inset 0px -2px 3px -1px var(--btn-shadow);
}

.supportBoxInner {
  max-width: 300px;
  margin: 30px;
}

.supportBoxContent {
  font-family: var(--font2);
  font-size: 18px;
  font-weight: 500;
}

.supportBoxText {
  text-align: center !important;
}
</style>