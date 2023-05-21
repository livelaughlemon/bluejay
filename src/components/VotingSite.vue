<script>
export default {
    props: {
        icon: String,
        link: String,
    }
}
</script>

<template>
    <div class="pageItemContentItem votingLink">
        <div class="pageItemContentItemUpper noMargin">
            <div :class="icon"></div>
            <div class="pageItemContentItemTitle noMargin">
                <a :id="link" :href="link" target="_blank" rel="noopener noreferrer" @click="e => e.target.classList.toggle('strike')"><slot></slot></a>
            </div>
        </div>
    </div>
</template>