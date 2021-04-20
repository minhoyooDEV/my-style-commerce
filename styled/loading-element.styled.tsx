import styled from 'styled-components';

const Loading = styled.div`
	font-size: 15px; /* change size here */
	position: relative;
	width: 4em;
	height: 1em;
	margin: 10px auto;

	span {
		display: block;
		width: 1em;
		height: 1em;
		border-radius: 50%;
		background: #555; /* change color here */
		position: absolute;
		animation-duration: 0.5s;
		animation-timing-function: ease;
		animation-iteration-count: infinite;
	}

	span:nth-child(1),
	span:nth-child(2) {
		left: 0;
	}
	span:nth-child(3) {
		left: 1.5em;
	}
	span:nth-child(4) {
		left: 3em;
	}

	@keyframes reveal {
		from {
			transform: scale(0.001);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes slide {
		to {
			transform: translateX(1.5em);
		}
	}

	span:nth-child(1) {
		animation-name: reveal;
	}

	span:nth-child(2),
	span:nth-child(3) {
		animation-name: slide;
	}

	span:nth-child(4) {
		animation-name: reveal;
		animation-direction: reverse;
	}
`;

const LoadingElement = () => (
	<Loading>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</Loading>
);
export default LoadingElement;
