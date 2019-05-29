const baseConfig = require('../tailwind.config.js');
const getFormattedConfig = require('../src/configFunctions/formatConfig.js');

const coloursOnlyTheme = getFormattedConfig(baseConfig.theme, 'colors');

const baseConfigWithColoursOnly = {
  ...baseConfig,
  theme: coloursOnlyTheme
};

module.exports = {
  ...baseConfigWithColoursOnly,
  corePlugins: [
    'textColor'
  ]
}
