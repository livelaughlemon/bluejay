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
    </div>
</template>

<style>
.go {
  height: 36px;
  width: 36px;
  margin-right: 15px;
  background-size: cover;
  display: inline-block !important;
  border-radius: 7px;
  background-image: url(https://assets.orchidmc.me/images/orchidmcme/go.webp);
}

.votingLink {
  cursor: pointer;
}

.strike {
  text-decoration-line: line-through;
}
</style>