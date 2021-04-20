import styled, { css } from 'styled-components';

interface headerButtonStyledProps {
	active?: boolean;
}
const activeStyle = css`
	color: ${({ theme }) => theme.colors.main};
	border-color: ${({ theme }) => theme.colors.main};
	z-index: 1;
`;
export default styled.button<headerButtonStyledProps>`
	font-weight: 400;
	font-size: 0.875rem;
	border-radius: 0.25rem;
	border: ${({ theme }) => theme.colors.grey20} solid 0.0625rem;

	background: white;
	padding-top: 0.4375rem;
	padding-bottom: 0.4375rem;
	padding-right: 1rem;
	padding-left: 1rem;
	position: relative;

	${({ active }) => (active ? activeStyle : null)};

	:hover,
	:focus {
		${activeStyle}
	}
`;
