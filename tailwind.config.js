
module.exports = {
  prefix: '',
  important: false,
  // separator: ':',
  theme: {
    screens: {
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
    },
    colors: {
      transparent: 'transparent',

      white: '#ffffff',
      black: '#000000',

      // all shades of grey as supported
      grey: {
        50: '#eeeeee ',
        100: '#d8d8d8',
        200: '#bbbbbb',
        300: '#9e9e9e',
        400: '#8a8a8a',
        500: '#757575',
        600: '#555555',
        700: '#3b3b3b',
        800: '#111111',
        900: '#000000'
      },
      yellow: {
        300: '#ffdb4d',
        500: '#ffcc00',
        700: '#f7bb00'
      },
      red: {
        300: '#eb3f54',
        500: '#c10018',
        700: '#ab0011'
      },
      blue: {
        300: '#63cae8',
        500: '#20b3de',
        700: '#179ece'
      },
      green: {
        300: '#87ce7f',
        500: '#54b948',
        700: '#3d9734'
      },
      orange: {
        300: '#ffb84d',
        500: '#ff9900',
        700: '#f57d00'
      },
      purple: {
        300: '#9e85bd',
        500: '#7450a0',
        700: '#5e3e88'
      },
      blueGray: {
        300: '#95a0a6',
        500: '#697780',
        700: '#526068'
      }
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem', // 4
      '2': '0.5rem', // 8
      '3': '0.75rem', // 12
      '4': '1rem', // 16
      '5': '1.5rem', // 24
      '6': '2rem', // 32
      '7': '2.5rem', // 40
      '8': '4rem', // 64
    },
    // simplifying as only a few elements will have this
    backgroundColor: theme => ({
      white: '#ffffff',
      black: '#000000',
      ...theme('colors.grey')
    }),
    backgroundPosition: {
      // bottom: 'bottom',
      // center: 'center',
      // left: 'left',
      // 'left-bottom': 'left bottom',
      // 'left-top': 'left top',
      // right: 'right',
      // 'right-bottom': 'right bottom',
      // 'right-top': 'right top',
      // top: 'top',
    },
    backgroundSize: {
      // auto: 'auto',
      // cover: 'cover',
      // contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.500', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      default: '0.125rem',
      lg: '0.25rem',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
    },
    boxShadow: {
      // default series is equivalent to "sharp" in design system
      default: '0 2px 2px 0 rgba(0, 0, 0, 0.1)',
      md: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      lg: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
      'sm-soft': '0 2px 8px 0 rgba(0, 0, 0, 0.2)',
      'md-soft': '0 2px 8px 0 rgba(0, 0, 0, 0.4)',
      'lg-soft': '0 2px 8px 0 rgba(0, 0, 0, 0.6)',
      none: 'none',
    },
    container: {},
    cursor: {
      // auto: 'auto',
      // default: 'default',
      // pointer: 'pointer',
      // wait: 'wait',
      // text: 'text',
      // move: 'move',
      // 'not-allowed': 'not-allowed',
    },
    fill: {
      // current: 'currentColor',
    },
    flex: {
      // '1': '1 1 0%',
      // auto: '1 1 auto',
      // initial: '0 1 auto',
      // none: 'none',
    },
    flexGrow: {
      // '0': '0',
      // default: '1',
    },
    flexShrink: {
      // '0': '0',
      // default: '1',
    },
    fontFamily: {
      body: [
        'Arial',
        '"Helvetica Neue"',
        'sans-serif'
      ],
      head: [
        '"UniversLT"',
        '"Arial Narrow"',
        'sans-serif'
      ]
    },
    fontSize: {
      xs: '0.75rem', // 12
      sm: '0.875rem', // 14
      base: '1rem', // 16
      lg: '1.125rem', // 18
      xl: '1.375rem', // 22
      '2xl': '1.75rem', // 28
      '3xl': '2.25rem', // 36
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500', //universLT does not have weight loaded
      bold: '700',
    },
    height: theme => ({
      // auto: 'auto',
      // ...theme('spacing'),
      // full: '100%',
      // screen: '100vh',
    }),
    inset: {
      // '0': '0',
      // auto: 'auto',
    },
    letterSpacing: {
      // tighter: '-0.05em',
      // tight: '-0.025em',
      // normal: '0',
      // wide: '0.025em',
      // wider: '0.05em',
      // widest: '0.1em',
    },
    lineHeight: {
      // none: '1',
      // tight: '1.25',
      // snug: '1.375',
      // normal: '1.5',
      // relaxed: '1.625',
      // loose: '2',
    },
    listStyleType: {
      // none: 'none',
      // disc: 'disc',
      // decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      // auto: 'auto',
      // ...theme('spacing'),
      // ...negative(theme('spacing')),
    }),
    maxHeight: {
      // full: '100%',
      // screen: '100vh',
    },
    maxWidth: {
      full: '100%',
    },
    minHeight: {
      // '0': '0',
      // full: '100%',
      // screen: '100vh',
    },
    minWidth: {
      // '0': '0',
      // full: '100%',
    },
    objectPosition: {
      // bottom: 'bottom',
      // center: 'center',
      // left: 'left',
      // 'left-bottom': 'left bottom',
      // 'left-top': 'left top',
      // right: 'right',
      // 'right-bottom': 'right bottom',
      // 'right-top': 'right top',
      // top: 'top',
    },
    opacity: {
      // adding (1)-4-6-9 scale but leaving the original as seem useful to have
      '0': '0',
      '10': '0.1',
      '40': '0.4',
      '60': '0.6',
      '90': '0.9',
      '100': '1',
    },
    order: {
      // first: '-9999',
      // last: '9999',
      // none: '0',
      // '1': '1',
      // '2': '2',
      // '3': '3',
      // '4': '4',
      // '5': '5',
      // '6': '6',
      // '7': '7',
      // '8': '8',
      // '9': '9',
      // '10': '10',
      // '11': '11',
      // '12': '12',
    },
    // using only the first 6 from spacing spec, the larger ones don't look useful
    padding: theme => ({
      '0': '0',
      '1': '0.25rem', // 4
      '2': '0.5rem', // 8
      '3': '0.75rem', // 12
      '4': '1rem', // 16
      '5': '1.5rem', // 24
      '6': '2rem', // 32
    }),
    stroke: {
      // current: 'currentColor',
    },
    textColor: theme => theme('colors'),
    width: theme => ({
      auto: 'auto',
      //...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '2/6': '33.33333%',
      '3/6': '50%',
      '4/6': '66.66667%',
      '5/6': '83.33333%',
      '1/12': '8.33333%',
      '2/12': '16.66667%',
      '3/12': '25%',
      '4/12': '33.33333%',
      '5/12': '41.66667%',
      '6/12': '50%',
      '7/12': '58.33333%',
      '8/12': '66.66667%',
      '9/12': '75%',
      '10/12': '83.33333%',
      '11/12': '91.66667%',
      full: '100%',
      screen: '100vw',
    }),
    zIndex: {
      // auto: 'auto',
      // '0': '0',
      // '10': '10',
      // '20': '20',
      // '30': '30',
      // '40': '40',
      // '50': '50',
    },
  },
  variants: {
    // alignContent: ['responsive'],
    // alignItems: ['responsive'],
    // alignSelf: ['responsive'],
    // appearance: ['responsive'],
    // backgroundAttachment: ['responsive'],
    // backgroundColor: ['responsive', 'hover', 'focus'],
    // backgroundPosition: ['responsive'],
    // backgroundRepeat: ['responsive'],
    // backgroundSize: ['responsive'],
    // borderCollapse: ['responsive'],
    // borderColor: ['responsive', 'hover', 'focus'],
    // borderRadius: ['responsive'],
    // borderStyle: ['responsive'],
    // borderWidth: ['responsive'],
    // boxShadow: ['responsive', 'hover', 'focus'],
    // cursor: ['responsive'],
    // display: ['responsive'],
    // fill: ['responsive'],
    // flex: ['responsive'],
    // flexDirection: ['responsive'],
    // flexGrow: ['responsive'],
    // flexShrink: ['responsive'],
    // flexWrap: ['responsive'],
    // float: ['responsive'],
    // fontFamily: ['responsive'],
    // fontSize: ['responsive'],
    // fontSmoothing: ['responsive'],
    // fontStyle: ['responsive'],
    // fontWeight: ['responsive', 'hover', 'focus'],
    // height: ['responsive'],
    // inset: ['responsive'],
    // justifyContent: ['responsive'],
    // letterSpacing: ['responsive'],
    // lineHeight: ['responsive'],
    // listStylePosition: ['responsive'],
    // listStyleType: ['responsive'],
    // margin: ['responsive'],
    // maxHeight: ['responsive'],
    // maxWidth: ['responsive'],
    // minHeight: ['responsive'],
    // minWidth: ['responsive'],
    // objectFit: ['responsive'],
    // objectPosition: ['responsive'],
    // opacity: ['responsive'],
    // order: ['responsive'],
    // outline: ['responsive', 'focus'],
    // overflow: ['responsive'],
    // padding: ['responsive'],
    // pointerEvents: ['responsive'],
    // position: ['responsive'],
    // resize: ['responsive'],
    // stroke: ['responsive'],
    // tableLayout: ['responsive'],
    // textAlign: ['responsive'],
    // textColor: ['responsive', 'hover', 'focus'],
    // textDecoration: ['responsive', 'hover', 'focus'],
    // textTransform: ['responsive'],
    // userSelect: ['responsive'],
    // verticalAlign: ['responsive'],
    // visibility: ['responsive'],
    // whitespace: ['responsive'],
    // width: ['responsive'],
    // wordBreak: ['responsive'],
    // zIndex: ['responsive'],
  },
  corePlugins: {},
  plugins: [

  ],
}
