import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme extends BasicTheme {
		borderRadius: string;
		spacing: string;
		'spacing-2': string;
		contentsMaxWith: string;

		headerHeight: string;
		colors: {
			main: string;
			sub: string;
			pink: string;
			orange: string;
			green: string;
			yellow: string;
			grey06: string;
			grey20: string;
			grey40: string;
			grey60: string;
			grey80: string;
			black: string;
		};
	}
}
