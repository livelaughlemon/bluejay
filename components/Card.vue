<script>
export default {
    props: {
        icon: String,
        title: String,
        body: String,
    }
}
</script>

<template>
    <div class="pageItemContentItem">
        <div class="pageItemContentItemUpper">
            <div :class="icon"></div>
            <div class="pageItemContentItemTitle">
                <p>{{ title }}</p>
            </div>
        </div>
        <p class="pageItemContentItemBody">
            {{ body }}
        </p>
    </div>
</template>