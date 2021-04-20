import styled from 'styled-components';
import { scrollHide } from './shared-style';

export default styled.div`
	width: 100%;
	height: 100%;
	padding-top: ${({ theme }) => theme.headerHeight};
	overflow-y: scroll;
	background-color: ${({ theme }) => theme.colors.backgroundColor};
	${scrollHide}
`;
