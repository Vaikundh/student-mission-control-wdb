import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: "10px",
        border: "3px solid",

        _disabled: {
            bg: "#BFBFBF"
        },

        _hover: {
            
        },

        _focus: {

        },

        _active: {

        }
      },
      variants: {
        solid: {
          bg:"transparent"
        },
      }
    },
  },
})

export default theme