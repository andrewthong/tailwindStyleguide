const tailwindcss = require('tailwindcss')

module.exports = {
  "plugins": [
    require('postcss-import'),
    require('tailwindcss')('tailwind.config.js'),
    require('postcss-nesting'),
    require('autoprefixer')({
      grid: true,
      flexbox: 'no-2009'
    })
  ]
}
