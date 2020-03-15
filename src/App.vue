<template>
  <trs-desktop :stageNumber="1">
    <trs-player 
      ref="leftPlayer"
      :leftPlayer="true"
      :hpCount="100"
      @onDamagePlayerChanged="handleDamagePlayer"
      @onHealPlayerChanged="handleHealPlayer"
    ></trs-player>
    <trs-player
      ref="rightPlayer"
      :rightPlayer="true"
      :hpCount="100"
      @onDamagePlayerChanged="handleDamagePlayer"
      @onHealPlayerChanged="handleHealPlayer"
    ></trs-player>
  </trs-desktop>
</template>

<script>
import DesktopVue from "./components/desktop/Desktop.vue";
import PlayerVue from "./components/player/Player.vue";

export default {
  components: {
    trsDesktop: DesktopVue,
    trsPlayer: PlayerVue
  },
  methods: {
    getPlayerFromRef() {
      const playerSelector = data.leftPlayer ? 'leftPlayer' : 'rightPlayer'
      return this.$refs[playerSelector]
    },
    handleDamagePlayer(data) {
      const player = this.getPlayerFromRef()
      player.hpCount -= data.hp
    },
    handleHealPlayer(data) {
      const player = this.getPlayerFromRef()
      player.hpCount += data.hp
    }
  }
};
</script>

<style lang="scss" scoped>
</style>