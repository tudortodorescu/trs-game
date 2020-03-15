<template>
  <div class="buttons-wrapper">
    <div class="button attack" @click="attack()" :style="attackButton"></div>
    <div class="button special" @click="special()" :style="specialAttackButton"></div>
    <div class="button heal" @click="heal()" :style="healButton"></div>
  </div>
</template>

<script>
import { ActionsService } from '../../../services/actions.service'
export default {
  props: ['isLeft'],
  methods: {
    attack() {
      ActionsService.attackPlayer(!this.isLeft)
    },
    special() {
      ActionsService.specialAttackPalyer(!this.isLeft)
    },
    heal() {
      ActionsService.healPlayer(this.isLeft)
    }
  },
  computed: {
    attackButton() {
      return { 'background-image': `url(/src/assets/buttons/attack-player-${this.isLeft ? '1' : '2'}.png)` }
    },
    specialAttackButton() {
      return { 'background-image': `url(/src/assets/buttons/special-attack-player-${this.isLeft ? '1' : '2'}.png)` }
    },
    healButton() {
      return { 'background-image': `url(/src/assets/buttons/heal-players.png)` }
    },
  }
};
</script>

<style lang="scss" scoped>
.buttons-wrapper {
  position: absolute;
  bottom: 50px;
  z-index: 3;

  .button {
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 120px;
    width: 120px;
    margin: -5px -10px;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>