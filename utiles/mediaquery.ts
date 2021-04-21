/**
 * @constant
 */

const size = {
	xs: '321px',
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px',
};

// https://codesandbox.io/embed/dry-media-queries-styled-components-typescript-8dwwu
/**
 * @param {{
 * xs: string,
 * sm: string,
 * md: string,
 * lg: string,
 * xl: string
 * }} size
 */
const mediaquery = (Object.keys(size) as Array<keyof typeof size>).reduce((acc, key) => {
	acc[key] = (style: string) => `@media (min-width: ${size[key]}) { ${style} }`;
	return acc;
	// eslint-disable-next-line @typescript-eslint/ban-types
}, {} as { [index: string]: Function });

export default mediaquery;
