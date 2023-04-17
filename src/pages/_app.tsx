import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme, Fonts } from "@/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
