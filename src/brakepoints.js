const baseConfig = require('../tailwind.config.js');
const getFormattedConfig = require('../src/configFunctions/formatConfig.js');

const brakepointsOnlyTheme = getFormattedConfig(baseConfig.theme, 'screens');

const baseConfigWithBrakepointsOnly = {
  ...baseConfig,
  theme: brakepointsOnlyTheme
};

module.exports = {
  ...baseConfigWithBrakepointsOnly,
  corePlugins: []
}
