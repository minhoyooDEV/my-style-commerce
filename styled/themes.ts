import { DefaultTheme as BasicTheme } from 'styled-components';

const defaultSpacing = '0.5rem';

const basicTheme: BasicTheme = {
	borderRadius: '0.5rem',
	spacing: defaultSpacing,
	'spacing-2': `calc(${defaultSpacing} * 2)`,
	contentsMaxWith: '768px',
	headerHeight: `4rem`,

	colors: {
		main: '#fc676c',
		sub: '#eda93d',
		pink: '#fc676c',
		orange: '#eda93d',
		green: '#4bef26',
		yellow: '#f9d936',
		grey06: '#EEE',
		grey20: '#CCC',
		grey40: '#999',
		grey60: '#666',
		grey80: '#333',
		black: '#000',

		backgroundColor: '#fbfbfb',
	},
	border: {
		basic: '#CCC solid 0.0625rem',
	},
};

export { basicTheme };
