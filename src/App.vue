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
    <trs-message 
      ref="message"
      :message="'+ 5 DAMAGE'"
    ></trs-message>

  </trs-desktop>
</template>

<script>
import DesktopVue from "./components/desktop/Desktop.vue";
import PlayerVue from "./components/player/Player.vue";
import { ActionsService } from "./services/actions.service"
import GameControlsVue from './components/game-controls/GameControls.vue';
import { ViewService } from './services/view.service';
import MessageVue from './components/message/Message.vue';

export default {
  data() {
    return {
      viewService: ViewService
    }
  },
  components: {
    trsDesktop: DesktopVue,
    trsPlayer: PlayerVue,
    trsGameControls: GameControlsVue,
    trsMessage: MessageVue
  },
  mounted() {
    ActionsService.leftPlayer = this.$refs.leftPlayer
    ActionsService.rightPlayer = this.$refs.rightPlayer
    ActionsService.message =  this.$refs.message
  }
};
</script>

<style lang="scss" scoped>
</style>