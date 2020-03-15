<template>
  <div class="desktop" :class="stageClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    stageNumber: Number,
    required: true
  },
  computed: {
    stageClass() {
      return `desktop-stage-${this.stageNumber.toString()}`
    }
  }
};
</script>

<style lang="scss" scoped>

.desktop {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  position: relative;
  border: 0 solid white;

  &-stage-1 {
    background-image: url(/src/assets/stages/stage1.jpg);
  }
}
</style>