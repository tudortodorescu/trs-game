import { GeneralViewService } from '../../../services/generalView.service'

export const hpWatchMixin = {
  watch: {
    hpCount(hp) {
      if (hp === 0) {
        this.$root.$emit('somebodyWon')

      } else if (hp > 100) {
        this.hpCount = 100
      
      } else if (hp < 0) {
        this.hpCount = 0
        
      }
    }
  },
  mounted() {
    this.$root.$on('somebodyWon', _ => {
      GeneralViewService.showFightButtons = false
      
      if (this.hpCount !== 0) 
        this.isVictorious = true

      console.log(this.$root.$refs)
    });
  }
}