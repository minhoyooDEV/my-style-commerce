import styled from 'styled-components';

export default styled.li`
	display: flex;
	padding-top: ${({ theme }) => theme['spacing-2']};
	padding-bottom: ${({ theme }) => theme['spacing-2']};

	padding-right: 0.75rem;
	padding-left: 0.75rem;
	gap: 1.5rem;

	.medal {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: lightgrey;
		color: white;
		text-align: center;
		line-height: 3rem;
		vertical-align: middle;
	}
	img {
		border-radius: 10%;
		width: 7rem;
		height: 7rem;
	}

	.info {
		padding-top: 1rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.desc {
			color: ${({ theme }) => theme.colors.grey40};
		}
	}
	& + & {
		border-top: ${({ theme }) => theme.border.basic};
	}
`;
