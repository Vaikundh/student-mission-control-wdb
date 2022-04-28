import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  shadows: {
    blueBorder: 'inset 0px 0px 0px 3px rgba(145, 216, 246, 1)',
    grayBorder: 'inset 0px 0px 0px 3px rgba(221, 221, 221, 1)',
    pressed: 'inset 2px 4px 4px rgba(0, 0, 0, 0.35)',
  },

  colors: {
    lightblue: '#91D8F6',
    blue: '#22347F',
    darkblue: '#001A33',
    green: '#839E61',
    darkgreen: '#01282B',
    black: '#121212',
    darkgrey: '#21212199',
    white: '#FFFFFF',
    lightgrey: '#C9D7DD',
    yellow: '#836000',
    red: '#612933',
    orange: '#B7521F',
  },

  components: {
    Text: {
      variants: {
        H1: {
          fontSize: '6xl',
          fontStyle: 'normal',
          fontWeight: '400',
          fontFamily: 'Allerta',
          color: '#fff',
        },
        H2: {
          fontSize: '4xl',
          fontStyle: 'normal',
          fontWeight: '400',
          fontFamily: 'Allerta',
          color: '#fff',
        },
        H3: {
          fontSize: '5xl',
          fontStyle: 'normal',
          fontWeight: '400',
          fontFamily: 'Sen',
          color: '#fff',
        },
        H4: {
          fontSize: '2xl',
          fontStyle: 'normal',
          fontWeight: '400',
          fontFamily: 'Sen',
          color: '#C9D7DD',
        },
        H5: {
          fontSize: 'xl',
          fontStyle: 'normal',
          fontWeight: '400',
          fontFamily: 'Sen',
          color: '#C9D7DD',
        },
        CalloutBold: {
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '800',
          fontFamily: 'Sen',
        },
        Callout: {
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '400',
          fontFamily: 'Sen',
        },
        Body: {
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          fontFamily: 'Sen',
        },
        BodySemibold: {
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '700',
          fontFamily: 'Sen',
        },
        BodyBold: {
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '800',
          fontFamily: 'Sen',
        },
        Footnote: {
          fontSize: '13px',
          fontStyle: 'normal',
          fontWeight: '400',
          fontFamily: 'Sen',
        },
        FootnoteBold: {
          fontSize: '13px',
          fontStyle: 'normal',
          fontWeight: '700',
          fontFamily: 'Sen',
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: '10px',
        bg: '#121212',

        _disabled: {
          opacity: 1,
          boxShadow: 'none',
          bg: '#BFBFBF',
          color: '#121212',
        },

        _hover: {
          _disabled: {
            bg: '#BFBFBF',
          },
        },

        _active: {
          _disabled: {
            boxShadow: 'none',
            color: 'initial',
          },
        },
      },
      variants: {
        primary: {
          color: '#91D8F6',
          boxShadow: 'blueBorder',

          _hover: {
            bg: '#91D8F6',
            color: '#121212',
          },

          _active: {
            bg: '#001A33',
            color: '#91D8F6',
            boxShadow: 'pressed',
          },

          _focus: {
            boxShadow: 'blueBorder',
            bg: '#001A33',
          },
        },

        secondary: {
          color: '#DDDDDD',
          boxShadow: 'grayBorder',

          _hover: {
            bg: '#FFFFFF',
            color: '#121212',
          },

          _active: {
            bg: '#4D4D4D',
            color: '#FFFFFF',
            boxShadow: 'pressed',
          },

          _focus: {
            boxShadow: 'grayBorder',
            bg: '#4D4D4D',
          },
        },
      },
    },
  },
});

export default theme;
