<script>
export default {
    props: {
        type: String,
        href: String,
        width: String,
    },
    data: () => ({
        buttonclasses: "btn",
    }),
    created() {
        this.getButtonType()
        this.getWidth()
    },
    methods: {
        async getWidth() {
            this.widthstyle = "width: " + this.width + "!important;"
        },
        async getButtonType() {
            this.buttonclasses = "btn " + this.type
        }
    }
}

</script>

<template>
    <a :class="buttonclasses" :style="widthstyle" :href="href">
        <slot></slot>
    </a>
</template>