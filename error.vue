<script setup>
const props = defineProps({
    error: Object
})
</script>

<template>
    <div>
        <div class="pageHeader noImage">
            <PageHeader />
            <div class="pageHeaderContent">
                <div class="pageHeaderItemContainer">
                    <div class="pageHeaderItem">
                        <span class="pageHeaderItemText">
                            <h1>Uh oh! Something went wrong here.</h1>
                            <p>{{ error.statusCode }} &bull; {{ error.statusMessage }}</p>
                        </span>
                        <br><br>
                        <Button href="/" type="noleft">Go Home</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>