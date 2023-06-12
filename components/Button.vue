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
    <a :class="buttonclasses" :style="widthstyle" :href="href" target="_blank">
        <slot></slot>
    </a>
</template>

<style>
.btn {
  margin: 6px;

  padding-top: 0.5em;
  padding-bottom: 0.5em;
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

  border-radius: 0.75em;

  box-shadow: inset 0px -2px 3px -1px var(--btn-shadow);

}

.btn:active {
  transform: scale(90%);
}

.noleft {
  margin-left: 0px !important;
}

.nobottom {
  margin-bottom: 0px !important;
}

.btn.sparkles::before {
  content: url('/assets/ButtonSparklesBefore.svg');
  left: -14px;
  top: -10px;
  position: absolute;
  z-index: 2;
}

.btn.sparkles::after {
  content: url('/assets/ButtonSparklesAfter.svg');
  right: -20px;
  top: -10px;
  position: absolute;
  z-index: 2;
}

.btn.translucent {
  background-color: #ffffff20;
}

.btn:hover.translucent {
  background-color: #ffffff35;
}

.btn:hover.undefined {
  background-color: var(--bg3);
}

.btn.info {
  background-color: var(--bg-info1);
}

.btn:hover.info {
  background-color: var(--bg-info2);
}

.btn.success {
  background-color: var(--bg-success1);
}

.btn:hover.success {
  background-color: var(--bg-success2);
}

.btn.warning {
  background-color: var(--bg-warning1);
}

.btn:hover.warning {
  background-color: var(--bg-warning2);
}

.btn.danger {
  background-color: var(--bg-danger1);
}

.btn:hover.danger {
  background-color: var(--bg-danger2);
}

.btn.dark {
  background-color: var(--bg-secondary-alt);
}

.btn:hover.dark {
  background-color: var(--bg-tertiary);
}
</style>