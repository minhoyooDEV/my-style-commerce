import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from '../styled/themes';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={basicTheme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
