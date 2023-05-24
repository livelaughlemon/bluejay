<script>
export default {
    props: {
        type: String,
        href: String,
    },
    data: () => ({
        buttonclasses: "btn",
    }),
    created() {
        this.getButtonType()
        window.setInterval(() => {
            this.getButtonType()
        }, 1000)
    },
    methods: {
        async getButtonType() {
            this.buttonclasses = "btn " + this.type
        }
    }
}
</script>

<template>
    <a :class="buttonclasses" :href="href">
        <slot></slot>
    </a>
</template>

<style>
.btn {
    margin: 6px;

    padding-top: 0.6em;
    padding-bottom: 0.6em;
    padding-left: 1.3em;
    padding-right: 1.3em;

    background-color: var(--bg2);
    color: var(--txt1);

    user-select: none;
    cursor: pointer;
    transition: .3s;

    font-family: var(--font1);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    display: inline-block;
}

.btn.info {
    background-color: var(--bg-info);
}

.btn.success {
    background-color: var(--bg-success);
}

.btn.warning {
    background-color: var(--bg-warning);
}

.btn.danger {
    background-color: var(--bg-danger);
}

.btn.accent {
    background-color: var(--accent);
}
</style>