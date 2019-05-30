
const getFormattedConfig = (config, option) => {
  return Object.keys(config)
    .reduce((obj, key) => {
      const value = key === option
        ? config[key]
        : null;

      obj[key] = value;

      return obj;
    }, {});
};

module.exports = getFormattedConfig;
