<template>
  <div class="hp-wrapper">
    <div class="hp-count" :style="{width: `${hpCount}%` }">{{ hpCount }}</div>
  </div>
</template>

<script>
export default {
  props: {
    hpCount: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.hp-wrapper {
  background: #ccc;
  width: 80%;
  height: 40px;
  margin: 0 auto;
  position: absolute;
  top: 30px;
  box-shadow: 2px 2px 10px black;

  .hp-count {
    text-shadow: 2px 2px 2px black;
    height: 30px;
    width: 100%;
    background: #00cc00;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    padding: 10px 0 0;
    letter-spacing: -1px;
  }
}
</style>