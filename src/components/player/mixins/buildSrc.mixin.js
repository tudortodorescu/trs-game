export const buildSrcMixin = {
  methods: {
    buildSrc() {
      return `${this.buildSrcBase()}/${this.buildSrcPlayer()}/${this.buildSrcHp()}`
    },
    buildSrcBase() {
      return `/src/assets`
    },
    buildSrcPlayer(leftPlayer = this.leftPlayer, rightPlayer = this.rightPlayer) {
      let src = 'players/'

      if (leftPlayer) {
        src += 'Robert'
      
      } else if (rightPlayer) {
        src += 'Cousin'
      }

      return src
    },
    buildSrcHp() {
      let src = ''

      if (this.isVictorious) {
        src += '5-victory.png'

      } else if (this.hpCount === 100) {
        src += '1-fighting.png'

      } else if (this.hpCount > 75) {
        src += '1-fighting.png'

      } else if (this.hpCount > 50) {
        src += '2-fighting-75hp.png'

      } else if (this.hpCount > 25) {
        src += '3-fighting-50hp.png'
      
      } else if (this.hpCount > 0) {
        src += '4-fighting-25hp.png'
      
      } else if (this.hpCount === 0) {
        src += '5-dead.png'
      }

      return src
    }
  }
}