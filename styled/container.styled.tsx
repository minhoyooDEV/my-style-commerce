import styled from 'styled-components';

export default styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: ${({ theme }) => theme['spacing-2']};
	padding-right: ${({ theme }) => theme['spacing-2']};
	max-width: ${({ theme }) => theme.contentsMaxWith};
`;
