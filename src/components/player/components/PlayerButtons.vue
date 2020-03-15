<template>
  <div class="buttons-wrapper">
    <div class="button attack" @click="attack()" :style="attackButton"></div>
    <div class="button special" @click="special()" :style="specialAttackButton"></div>
    <div class="button heal" @click="heal()" :style="healButton"></div>
  </div>
</template>

<script>
import { hpControlsMixin } from '../mixins/hpControls.mixin'
export default {
  mixins: [hpControlsMixin],
  props: ['isLeft'],
  data() {
    return {
      punchSound1: new Howl({src: ['/src/assets/sounds/2-punch.mp3']}),
      punchSound2: new Howl({src: ['/src/assets/sounds/2-pre-punch-swoosh.mp3']}),
      kickSound1: new Howl({src: ['/src/assets/sounds/1-kick.mp3']}),
      kickSound2: new Howl({src: ['/src/assets/sounds/1-pre-kick-swoosh.mp3']}),
      healSound1: new Howl({src: ['/src/assets/sounds/3-heal.wav']}),
      healSound2: new Howl({src: ['/src/assets/sounds/3-pre-heal.mp3']})
    }
  },
  methods: {
    attack() {
      this.$emit('onDamagePlayer', {
        hp: this.generateHp(1, 4),
        leftPlayer: !this.isLeft
      })

      this.punchSound1.play()
    },
    special() {
      this.$emit('onDamagePlayer', {
        hp: this.generateHp(5, 10),
        leftPlayer: !this.isLeft
      })

      this.kickSound1.play()
    },
    heal() {
      this.$emit('onHealPlayer', {
        hp: this.generateHp(3, 6),
        leftPlayer: this.isLeft
      })

      this.healSound1.play()
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
  bottom: 20px;

  .button {
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 120px;
    width: 120px;
    margin: -10px;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>