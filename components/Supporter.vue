<script>
export default {
    props: {
        name: String,
    },
    data: () => ({
        url: "https://mc-heads.net/head/",
    }),

    mounted() {
        this.getHead()
    },

    methods: {
        async getHead() {
            if (this.name === "undefined") {
                this.name = "MHF_Steve"
            }
            this.url = "https://mc-heads.net/head/" + this.name
        }
    }
}
</script>

<template>
    <div class="supporterContainer">
        <div class="supporterContent">
            <img class="supporterImage" :src="url">
            <span class="supporterName">{{ name }}</span>
        </div>
    </div>
</template>

<style>
.supporterImage {
  height: 50px;
  width: 50px;
  margin: 7px;
  display: inline;
}

.supporterContainer {
  display: flex;
  align-items: center;
  margin: 10px;
}

.supporterContent {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 130px;
}

.supporterName {
  color: var(--txt2);
  font-family: var(--font1);
  font-weight: 400;
  font-size: 15px;
}
</style>