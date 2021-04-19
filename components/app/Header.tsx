import ContainerStyled from '../../styled/container.styled';
import HeaderButtonGroupStyled from '../../styled/header-button-group.styled';
import HeaderButtonStyled from '../../styled/header-button.styled';
import HeaderStyled from '../../styled/header.styled';
import Link from 'next/link';

const Header = () => (
	<HeaderStyled>
		<ContainerStyled>
			<div>오늘 뭐입지?</div>
			<nav>
				<HeaderButtonGroupStyled>
					<Link href="/">
						<HeaderButtonStyled>상품</HeaderButtonStyled>
					</Link>
					<Link href="/ranks">
						<HeaderButtonStyled>랭킹</HeaderButtonStyled>
					</Link>
				</HeaderButtonGroupStyled>
			</nav>
		</ContainerStyled>
	</HeaderStyled>
);
export default Header;
