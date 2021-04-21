import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import { StoreProvider, useInitializeStore } from '../modules/stores';
import ComponentsWrapperStyled from '../styled/components-wrapper.styled';
import { basicTheme } from '../styled/themes';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	const initialProp = {};
	const store = useInitializeStore(initialProp);

	return (
		<StoreProvider store={store}>
			<ThemeProvider theme={basicTheme}>
				<Header />
				<ComponentsWrapperStyled>
					<Component {...pageProps} />
				</ComponentsWrapperStyled>
			</ThemeProvider>
		</StoreProvider>
	);
}

export default App;
