import styled from 'styled-components';

export default styled.button`
	font-weight: 400;
	font-size: 0.875rem;
	border-radius: 0.875rem;
	border: ${({ theme }) => theme.colors.grey40} solid 1px;

	background: white;
	padding-top: 0.4375rem;
	padding-bottom: 0.4375rem;
	padding-right: 1rem;
	padding-left: 1rem;

	:hover,
	:focus {
		color: ${({ theme }) => theme.colors.main};
		border-color: ${({ theme }) => theme.colors.main};
	}
`;
