import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
    fonts: {
        body: "'Montserrat', sans serif",
      },

    colors: {
        green: '#219653',
        black100: '#2F3733',
        black200: '#535461',
        transparent: 'rgba(255, 254, 253, 0.8)',
        purple100: '#83A1E1',
        bg: '#EBF3FD',
        white100: '#FDFFFE',
        red100: '#B21800',
        white200: '#F8FAFF'
    }
})

  export default theme