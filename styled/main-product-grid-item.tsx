import styled from 'styled-components';

export default styled.li`
	position: relative;
	background-color: green;
	img,
	div {
		position: absolute;
		top: 0;
	}
	.overlay {
		background-color: rgba(0, 0, 0, 0.15);
		height: 100%;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
		padding: 0.5rem;
	}

	.title {
		color: white;
		font-size: 0.875rem;
		white-space: pre;
	}

	.price {
		color: white;
		font-size: 1rem;
	}

	.shopname {
		color: white;
		font-size: 0.5rem;
	}

	overflow: hidden;
`;
