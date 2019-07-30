export default {
  colors: {
    sub: `#7A7778`,
    divider: `#dfdfdf`,
    warm: `#E76822`,
    light: `#FFFFFF`,
    cool: `#0068A0`,
    dark: `#262324`
  },
  get primary() {
    return this.colors.dark;
  },
  get secondary() {
    return this.colors.cool;
  },
  get border() {
    return this.colors.divider;
  }
};
