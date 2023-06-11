<script>
export default {
    props: {
        icon: String,
        href: String,
    }
}
</script>

<template>
    <div class="pageItemContentItem votingLink">
        <div class="pageItemContentItemUpper noMargin">
            <div class="go"></div>
            <div class="pageItemContentItemTitle noMargin">
                <a :id="href" class="votingLinkInner" :href="href" target="_blank" rel="noopener noreferrer"
                    @click="e => e.target.classList.toggle('strike')">
                    <slot></slot>
                </a>
            </div>
        </div>
</div></template>