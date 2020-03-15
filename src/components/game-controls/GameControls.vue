<template>
  <div class="game-controls-wrapper">
    <button
      class="animated infinite shake slower"
      @click="handlePlayAgain"
    >START NEW GAME</button>
  </div>
</template>

<script>
import { ActionsService } from '../../services/actions.service'
export default {
  methods: {
    handlePlayAgain() {
      ActionsService.startNewGame()
    }
  }
}
</script>

<style lang="scss" scoped>
  .game-controls-wrapper {
    position: absolute;
    top: calc(30% - 50px);
    left: calc(50% - 150px);

    button {
      cursor: pointer;
      width: 300px;
      height: 50px;
      box-shadow: 1px 1px 5px white;
      font-size: 20px;
      font-weight: bold;
    }
  }

</style>