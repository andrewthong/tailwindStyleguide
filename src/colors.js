const baseConfig = require('../tailwind.config.js');

baseConfig.theme = {
  ...baseConfig.theme,
  backgroundColor: null,
  borderColor: null,
  textColor: null
};

module.exports = {
  ...baseConfig,
  corePlugins: [
    'textColor'
  ]
}
