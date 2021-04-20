import styled from 'styled-components';
export const ShopnameStyled = styled.div`
	font-size: 0.5rem;
`;
export const ImgStyled = styled.img`
	font-size: 1rem;
	margin-left: 50%;
	margin-top: 50%;
	transition: all 0.5s ease;
	transform: translate(-50%, -50%) scale(1);
`;
export const PriceStyled = styled.div`
	::before {
		content: '₩';
		padding-right: 0.125rem;
	}
`;
export const TitleStyled = styled.h3`
	font-size: 0.875rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 80%;
`;
export const OverlayStyled = styled.div`
	color: white;
	background-color: rgba(0, 0, 0, 0.15);

	height: 100%;
	width: 100%;
	padding: 0.5rem;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	text-align: right;
	transition: all 0.5s ease;
`;
export default styled.li`
	position: relative;
	background-color: ${({ theme }) => theme.colors.grey06};
	${ImgStyled}, ${OverlayStyled} {
		position: absolute;
		top: 0;
	}
	overflow: hidden;
	:hover {
		${OverlayStyled} {
			background-color: rgba(0, 0, 0, 0.02);
		}
		${ImgStyled} {
			transform: translate(-50%, -50%) scale(1.08);
		}
	}
`;
