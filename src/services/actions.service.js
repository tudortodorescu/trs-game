
import { ViewService } from './view.service'

const actionAnimations = {
  attack: ['bounceIn', 'shake', 'faster'],
  special: ['wobble', 'faster'],
  heal: ['jello', 'fast'],
  winning: ['flip', 'slow'],
  reset: ['slideInUp']
}

const actionSounds = {
  takingDamage: new Howl({src: ['/src/assets/sounds/taking-damage.wav']}),
  punchSound1: new Howl({src: ['/src/assets/sounds/2-punch.mp3']}),
  punchSound2: new Howl({src: ['/src/assets/sounds/2-pre-punch-swoosh.mp3']}),
  kickSound1: new Howl({src: ['/src/assets/sounds/1-kick.mp3']}),
  kickSound2: new Howl({src: ['/src/assets/sounds/1-pre-kick-swoosh.mp3']}),
  healSound1: new Howl({src: ['/src/assets/sounds/3-heal.wav']}),
  healSound2: new Howl({src: ['/src/assets/sounds/3-pre-heal.mp3']}),
  winnner: new Howl({src: ['/src/assets/sounds/4-winner.wav']}),
  losser: new Howl({src: ['/src/assets/sounds/5-loser.mp3']}),
  credits: new Howl({src: ['/src/assets/sounds/0-credits.mp3']})
}
const generateHp = (min = 1, max = 4) => {
  return Math.max(min, Math.floor(Math.random() * (max + 1)))
}

let removeAnimationsTimeouts = []
const removeAllAnimations = (classList, animationType) => {
  removeAnimationsTimeouts = []
  for (const animation of animationType) 
    classList.remove(animation)
}

const generateAnimation = (player, animationType) => {
    const classList = player.$refs.image.classList
    removeAllAnimations(classList, animationType)
    
    const speed = animationType[animationType.length - 1]
    let delayTime = speed === 'faster' ? 500 
                  : speed === 'fast' ? 800
                  : speed === 'slower' ? 3000
                  : speed === 'slow' ? 2000
                  : 1000;

    for (const animation of animationType) {
      classList.add(animation)

      removeAnimationsTimeouts.push(
        setTimeout(_=>{ 
          classList.remove(animation)
        }, delayTime)
      )
    }
}

const generateSound = (isLeftPlayer, soundType) => {
  const sounds = actionSounds
  let sound

  switch (soundType) {
    case 'attack':
      sound = (isLeftPlayer) ? sounds.punchSound1 : sounds.punchSound1
      break;
    
    case 'special':
      sound = (isLeftPlayer) ? sounds.kickSound1 : sounds.kickSound1
      break;
    
    case 'heal':
      sound = (isLeftPlayer) ? sounds.healSound1 : sounds.healSound2
      break;

    case 'winning':
      sound = (isLeftPlayer) ? sounds.winnner : sounds.losser
      break;

    case 'reset':
      sound = sounds.credits
      break;

    case 'damage':
      sound = sounds.takingDamage
      break;
  }

  sound.play()
}

const getDamage = _ => {
  setTimeout(_ => { generateSound(null, 'damage') }, 50)
}

export const ActionsService = {
  leftPlayer: null,
  rightPlayer: null,

  attackPlayer(isLeftPlayer) {
    actionSounds.credits.stop()
    const player = this[isLeftPlayer ? 'leftPlayer' : 'rightPlayer']

    const hp = generateHp(1, 5)
    player.hpCount -= hp;
    
    generateAnimation(player, actionAnimations.attack)
    
    generateSound(isLeftPlayer, 'attack')
    getDamage()
  },

  specialAttackPalyer(isLeftPlayer) {
    actionSounds.credits.stop()
    const player = this[isLeftPlayer ? 'leftPlayer' : 'rightPlayer']
    
    const hp = generateHp(8, 15)
    
    player.hpCount -= hp
    
    generateAnimation(player, actionAnimations.special)
    
    generateSound(isLeftPlayer, 'special')
    getDamage()
  },

  healPlayer(isLeftPlayer) {
    actionSounds.credits.stop()
    const player = this[isLeftPlayer ? 'leftPlayer' : 'rightPlayer']

    const hp = generateHp(3, 7)
    
    player.hpCount += hp

    generateAnimation(player, actionAnimations.heal)
    generateSound(isLeftPlayer, 'heal')
  },
  
  winningPlayer(isLeftPlayer) {
    const player = this[isLeftPlayer ? 'leftPlayer' : 'rightPlayer']

    generateAnimation(player, actionAnimations.winning)
    generateSound(isLeftPlayer, 'winning')
  },

  startNewGame() {
    actionSounds.winnner.stop()
    actionSounds.losser.stop()

    ViewService.gameOver = false
    
    generateAnimation(this.leftPlayer, actionAnimations.reset)
    generateAnimation(this.rightPlayer, actionAnimations.reset)
    generateSound(null, 'reset')

    this.leftPlayer.resetPlayer()
    this.rightPlayer.resetPlayer()
  }
  
}