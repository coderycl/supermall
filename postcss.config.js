module.exports = {
  Plugin: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['ignore', 'tab-bar', 'tan-bar-item'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/TabBar/]
    },
  }
}
