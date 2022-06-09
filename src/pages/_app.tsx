import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { setupStore } from 'src/store/store';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyle from 'styles/GlobalStyles';
import MainLayout from 'src/layouts/MainLayout';


const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <GlobalStyle />

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )
}

export default MyApp
