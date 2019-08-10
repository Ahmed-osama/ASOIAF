export default {
  colors: {
    sub: `#7A7778`,
    divider: `#dfdfdf`,
    warm: `#E76822`,
    light: `#FFFFFF`,
    cool: `#0068A0`,
    green: `#16a177`,
    dark: `#262324`
  },
  space: 15,
  get divider() {
    return this.colors.divider;
  },
  get primary() {
    return this.colors.dark;
  },
  get secondary() {
    return this.colors.cool;
  },
  get sub() {
    return this.colors.warm;
  },
  get sucess() {
    return this.colors.green;
  },
  get border() {
    return this.colors.divider;
  }
};
