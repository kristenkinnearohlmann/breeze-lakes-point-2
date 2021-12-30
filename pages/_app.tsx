import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/appLayout";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
