<script>
export default {
    props: {
        icon: String,
        title: String,
        body: String,
        btn_name: String,
        btn_href: String,
        btn2_name: String,
        btn2_href: String,
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
        <div v-if="this.btn_name">
          <br>
          <Button type="noleft" :href="this.btn_href">{{ btn_name }}</Button>
          <Button type="noleft" :href="this.btn2_href" v-if="this.btn2_name">{{ btn2_name }}</Button>
        </div>
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

.cb {
  height: 36px;
  width: 36px;
  margin-right: 15px;
  background-size: cover;
  display: inline-block !important;
  border-radius: 7px;
  background-image: url('/assets/cb.webp');
}
</style>