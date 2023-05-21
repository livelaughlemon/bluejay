<script>
export default {
    props: {
        name: String,
    },
    data: () => ({
        url: "https://mc-heads.net/avatar/",
    }),

    created() {
        this.getHead()
    },

  methods: {
    async getHead() {
        this.url = "https://mc-heads.net/avatar/"+this.name
    }
  }
}
</script>

<template>
    <div class="supporterContainer">
        <div class="supporterContent">
            <img class="supporterImage" :title="name" :src="url">
        </div>
    </div>
</template>