<template>
  <div class="player" :class="playerPosition">
    <trs-player-hp 
      v-show="!viewService.gameOver"
      :hpCount="hpCount"
    ></trs-player-hp>
    <div 
      ref="image"
      class="image animated"
      :style="playerImage"
    ></div>
    <trs-player-buttons
      v-show="!viewService.gameOver"
      :isLeft="isLeftPlayer"
    ></trs-player-buttons>
  </div>
</template>

<script>
import { ViewService } from '../../services/view.service'
import { buildSrcMixin } from './mixins/buildSrc.mixin'
import { hpWatchMixin } from './mixins/hpWatch.mixin'
import { ActionsService } from '../../services/actions.service'
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
      viewService: ViewService
    }
  },
  computed: {
    isLeftPlayer() {
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
    },
    resetPlayer() {
      this.hpCount = 100
      this.isVictorious = false
    }
  },
  watch: {
    isVictorious(victory) {
      if (victory) 
        ActionsService.winningPlayer(this.isLeftPlayer)
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
    position: absolute;
    bottom: 0;
    z-index: 2;
  }

  &-left {
    left: 5px;
    .image {
      left: 40px;
    }
    .hp-wrapper {
      left: 30px;
    }
    .buttons-wrapper {
      left: 10px;
      
    }
  }

  &-right {
    right: 5px;
    .image {
      right: 40px;
    }
    .hp-wrapper {
      right: 30px;
    }
    .buttons-wrapper {
      right: 0;
    }
  }
}
</style>