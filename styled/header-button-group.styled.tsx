import styled from 'styled-components';
import headerButtonStyled from './header-button.styled';

export default styled.div`
	${headerButtonStyled} {
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
		& + & {
			border-radius: 0;
		}
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}
`;
