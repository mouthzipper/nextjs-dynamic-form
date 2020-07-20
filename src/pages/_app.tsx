import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'react-phone-input-2/lib/style.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
