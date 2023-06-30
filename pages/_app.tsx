import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PlayerLayout from "../components/playerLayout";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616162",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          _focus: {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});


export default function App({ Component, pageProps }: AppProps) {
  return(<ChakraProvider theme={theme}>
    <PlayerLayout>
      <Component {...pageProps} />
    </PlayerLayout>
  </ChakraProvider>)
}
