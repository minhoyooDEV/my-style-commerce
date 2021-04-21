import styled, { css } from 'styled-components';
import mediaquery from '../utiles/mediaquery';

interface ContainerStyledProps {
	noGutter?: boolean;
}
const ContainerStyled = styled.div<ContainerStyledProps>(
	({ theme, noGutter }) => css`
		margin-left: auto;
		margin-right: auto;
		padding-left: ${noGutter ? '0' : theme.spacing};
		padding-right: ${noGutter ? '0' : theme.spacing};
		${mediaquery.xs(`
			padding-left: ${noGutter ? '0' : theme['spacing-2']};
			padding-right: ${noGutter ? '0' : theme['spacing-2']};
		`)}
		max-width: ${theme.contentsMaxWith};
		background-color: white;
	`,
);
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
