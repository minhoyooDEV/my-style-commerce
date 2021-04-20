import styled from 'styled-components';
import mediaquery from '../utiles/mediaquery';

export const RankStyled = styled.div``;
export const InfoStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	h3 {
		padding-bottom: 0.75rem;
	}
	p {
		color: ${({ theme }) => theme.colors.grey40};
	}
`;
export const MedalStyled = styled.div<{ rank: number }>`
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	background-color: ${({ rank }) => ['', 'gold', 'silver', '#cd7f32'][rank]};
	color: ${({ theme, rank }) => (rank > 3 ? theme.colors.grey60 : 'white')};
	text-align: center;
	line-height: 3rem;
	vertical-align: middle;
	position: relative;
	:after {
		content: ' ';
		width: 100%;
		height: 100%;
		border-radius: 50%;
		position: absolute;
		top: 0;
		left: 0;
		background: linear-gradient(
			140deg,
			rgba(255, 255, 255, 0.5) 0 20%,
			rgba(255, 255, 255, 0.4) 30% 35%,
			rgba(255, 255, 255, 0.05) 70% 100%
		);
	}
`;
export const ImgStyled = styled.div`
	img {
		border-radius: 10%;
		width: 7rem;
		height: 7rem;
	}
`;
export default styled.li`
	display: flex;
	flex-wrap: wrap;
	${mediaquery.xs`
		flex-wrap: nowrap;
	`}

	padding-top: ${({ theme }) => theme['spacing-2']};
	padding-bottom: ${({ theme }) => theme['spacing-2']};

	padding-right: 0.75rem;
	padding-left: 0.75rem;
	gap: 1rem;

	& + & {
		border-top: ${({ theme }) => theme.border.basic};
	}
`;
