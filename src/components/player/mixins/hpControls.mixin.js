export const hpControlsMixin = {
  methods: {
    generateHp(min = 1, max = 4) {
      return Math.max(min, Math.floor(Math.random() * (max + 1)))
    }
  }
}