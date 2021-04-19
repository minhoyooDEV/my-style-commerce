import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import Header from '../components/app/Header';
import { basicTheme } from '../styled/themes';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={basicTheme}>
			<Header />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
