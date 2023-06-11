<script>
export default {
    props: {
        name: String,
    },
    data: () => ({
        url: "https://mc-heads.net/head/",
    }),

    created() {
        this.getHead()
    },

    methods: {
        async getHead() {
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