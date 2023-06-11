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

<style>
.sf {
  height: 36px;
  width: 36px;
  margin-right: 15px;
  background-size: cover;
  display: inline-block !important;
  border-radius: 7px;
  background-image: url('/assets/sf.webp');
}

.nptw {
  height: 36px;
  width: 36px;
  margin-right: 15px;
  background-size: cover;
  display: inline-block !important;
  border-radius: 7px;
  background-image: url('/assets/nptw.webp');
}

.ca {
  height: 36px;
  width: 36px;
  margin-right: 15px;
  background-size: cover;
  display: inline-block !important;
  border-radius: 7px;
  background-image: url('/assets/ca.webp');
}

.ty {
  height: 36px;
  width: 36px;
  margin-right: 15px;
  background-size: cover;
  display: inline-block !important;
  border-radius: 7px;
  background-image: url('/assets/ty.webp');
}

.go {
  height: 36px;
  width: 36px;
  margin-right: 15px;
  background-size: cover;
  display: inline-block !important;
  border-radius: 7px;
  background-image: url('/assets/go.webp');
}
</style>