<script>
export default {
    props: {
        url: String,
    }
}
</script>

<template>
    <div class="supporterContainer">
        <div class="supporterContent">
            <img class="supporterImage" :src="url">
        </div>
    </div>
</template>