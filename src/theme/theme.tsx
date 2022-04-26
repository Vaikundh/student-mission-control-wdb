import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  shadows: {
    blueBorder: 'inset 0px 0px 0px 3px rgba(145, 216, 246, 1)',
    grayBorder: 'inset 0px 0px 0px 3px rgba(221, 221, 221, 1)',
    pressed: 'inset 2px 4px 4px rgba(0, 0, 0, 0.35)',
  },

  components: {
    Text: {
      variants: {
        Title: {
          fontSize: '5xl',
          color: '#fff',
          fontFamily: 'Allerta',
        },
        subTitle: {
          fontSize: '3xl',
          color: '#C9D7DD',
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
