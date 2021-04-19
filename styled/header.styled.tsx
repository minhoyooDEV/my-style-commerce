import styled from 'styled-components';
import ContainerStyled from './container.styled';

export default styled.div`
	border-bottom: 1px solid lightgray;
	${ContainerStyled} {
		height: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
`;
