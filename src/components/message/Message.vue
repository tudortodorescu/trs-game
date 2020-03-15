<template>
  <div class="on-screen-message animated zoomIn faster">
    {{ message }}
  </div>
</template>

<script>
/** @TODO */
export default {
  props: ['message']
}
</script>

<style lang="scss" scoped>
  .on-screen-message {
    display: none;
    top: calc(50% - 100px);
    left: calc(50% - 150px);
    transform: rotate(15deg);
    color: #21ff00;
    font-size: 48px;

    position: absolute;
    width: auto;
    height: auto;
    font-weight: bold;
    letter-spacing: 0px;
  }
</style>