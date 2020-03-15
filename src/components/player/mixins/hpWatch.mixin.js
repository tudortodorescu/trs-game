import { ViewService } from '../../../services/view.service'

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
      ViewService.gameOver = true
      
      if (this.hpCount !== 0) 
        this.isVictorious = true
    });
  }
}