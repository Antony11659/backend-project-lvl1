export const makeRandomNum = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
export const makeArray = (...arg) => arg; // eslint-disable-line
