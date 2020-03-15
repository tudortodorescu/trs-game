<template>
  <trs-desktop :stageNumber="1">
    <trs-player 
      ref="leftPlayer"
      :leftPlayer="true"
      :hpCount="100"
    ></trs-player>
    <trs-player
      ref="rightPlayer"
      :rightPlayer="true"
      :hpCount="100"
    ></trs-player>
    <trs-game-controls 
      v-show="viewService.gameOver"
    ></trs-game-controls>
  </trs-desktop>
</template>

<script>
import DesktopVue from "./components/desktop/Desktop.vue";
import PlayerVue from "./components/player/Player.vue";
import { ActionsService } from "./services/actions.service"
import GameControlsVue from './components/game-controls/GameControls.vue';
import { ViewService } from './services/view.service';

export default {
  data() {
    return {
      viewService: ViewService
    }
  },
  components: {
    trsDesktop: DesktopVue,
    trsPlayer: PlayerVue,
    trsGameControls: GameControlsVue
  },
  mounted() {
    ActionsService.leftPlayer = this.$refs.leftPlayer
    ActionsService.rightPlayer = this.$refs.rightPlayer
  }
};
</script>

<style lang="scss" scoped>
</style>