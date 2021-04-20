import styled from 'styled-components';
import mainProductGridItem from './main-product-grid-item';

export default styled.ul`
	display: flex;
	flex-flow: row wrap;
	position: relative;
	margin: -1px 0 0 -1px;
	width: calc(100% + 1px);
	${mainProductGridItem} {
		padding-top: 33.333%;
		width: calc(33.333% - 1px);
		margin: 1px 0 0 1px;
		&:nth-child(3n) {
			margin-right: 0;
		}
	}
`;
