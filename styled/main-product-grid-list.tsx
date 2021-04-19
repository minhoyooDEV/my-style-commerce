import styled from 'styled-components';
import mainProductGridItem from './main-product-grid-item';

export default styled.ul`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	gap: 1px;
	${mainProductGridItem} {
		padding-top: 33%;
		width: 33%;
	}
`;
