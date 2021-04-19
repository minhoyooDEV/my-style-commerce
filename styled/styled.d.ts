import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme extends BasicTheme {
		borderRadius: string;
		spacing: string;
		contentsMaxWith: string;

		headerHeight: string;
	}
}
