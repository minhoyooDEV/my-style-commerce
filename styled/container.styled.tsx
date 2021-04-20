import styled, { css } from 'styled-components';
import mediaquery from '../utiles/mediaquery';

interface ContainerStyledProps {
	noGutter?: boolean;
}
const ContainerStyled = styled.div<ContainerStyledProps>`
	margin-left: auto;
	margin-right: auto;
	padding-left: ${({ theme, noGutter }) => (noGutter ? '0' : theme['spacing-2'])};
	padding-right: ${({ theme, noGutter }) => (noGutter ? '0' : theme['spacing-2'])};
	max-width: ${({ theme }) => theme.contentsMaxWith};
`;
export default ContainerStyled;

export const ResponsiveContainerStyled = styled(ContainerStyled)(
	({ theme }) => css`
		padding-left: 0;
		padding-right: 0;
		${mediaquery.sm(`
			padding-left: ${theme['spacing-2']};
			padding-right: ${theme['spacing-2']};
		`)}
	`,
);
