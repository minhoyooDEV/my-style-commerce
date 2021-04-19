import ContainerStyled from '../../styled/container.styled';
import HeaderButtonGroupStyled from '../../styled/header-button-group.styled';
import HeaderButtonStyled from '../../styled/header-button.styled';
import HeaderStyled from '../../styled/header.styled';

const Header = () => (
	<HeaderStyled>
		<ContainerStyled>
			<div>오늘 뭐입지?</div>
			<nav>
				<HeaderButtonGroupStyled>
					<HeaderButtonStyled>상품</HeaderButtonStyled>
					<HeaderButtonStyled>랭킹</HeaderButtonStyled>
				</HeaderButtonGroupStyled>
			</nav>
		</ContainerStyled>
	</HeaderStyled>
);
export default Header;
