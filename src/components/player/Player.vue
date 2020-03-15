<template>
  <div class="player" :class="playerPosition">
    <trs-player-hp :hpCount="hpCount"></trs-player-hp>
    <div class="image" :style="playerImage"></div>
    <trs-player-buttons
      v-show="generalViewService.showFightButtons"
      :isLeft="isLeftButtons"
      @onDamagePlayer="handleDamagePlayer"
      @onHealPlayer="handleHealPlayer"
    ></trs-player-buttons>
  </div>
</template>

<script>
import { GeneralViewService } from '../../services/generalView.service'
import { buildSrcMixin } from './mixins/buildSrc.mixin'
import { hpWatchMixin } from './mixins/hpWatch.mixin'
import PlayerHpVue from './components/PlayerHp.vue';
import PlayerButtonsVue from './components/PlayerButtons.vue';
export default {
  mixins: [
    buildSrcMixin,
    hpWatchMixin
  ],
  components: {
    trsPlayerHp: PlayerHpVue,
    trsPlayerButtons: PlayerButtonsVue
  },
  props: {
    leftPlayer: Boolean,
    rightPlayer: Boolean,
    hpCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isVictorious: false,
      generalViewService: GeneralViewService
    }
  },
  computed: {
    isLeftButtons() {
      if (this.leftPlayer)
        return true

      return false
    },
    playerPosition() {
      return {
        "player-left": this.leftPlayer,
        "player-right": this.rightPlayer
      };
    },
    playerImage() {
      return {
        'background-image': `url(${this.buildSrc()})`
      }
    }
  },
  methods: {
    handleDamagePlayer(data) {
      this.$emit('onDamagePlayerChanged', data)
    },
    handleHealPlayer(data) {
      this.$emit('onHealPlayerChanged', data)
    }
  }
};
</script>

<style lang="scss" scoped>
.player {
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 40%;
  height: 100%;
  
  .image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100%;
    width: 100%;
  }

  &-left {
    left: 0;
    .hp-wrapper {
      left: 30px;
    }
    .buttons-wrapper {
      left: 10px;
      
    }
  }

  &-right {
    right: 10px;
    .hp-wrapper {
      right: 30px;
    }
    .buttons-wrapper {
      right: 0;
      .button.attack { background-image: url(/src/assets/buttons/attack-player-2.png) }
      .button.special { background-image: url(/src/assets/buttons/special-attack-player-2.png) }
      .button.heal { background-image: url(/src/assets/buttons/heal-players.png) }
    }
  }
}
</style>