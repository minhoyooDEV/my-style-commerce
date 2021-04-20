import Link from 'next/link';
import { useRouter } from 'next/router';
import ContainerStyled from '../styled/container.styled';
import HeaderButtonGroupStyled from '../styled/header-button-group.styled';
import HeaderButtonStyled from '../styled/header-button.styled';
import HeaderStyled from '../styled/header.styled';

const PathDataList = [
	{ href: '/', text: '상품' },
	{ href: '/ranks', text: '랭킹' },
];
const Header = () => {
	const { pathname } = useRouter();
	return (
		<HeaderStyled>
			<ContainerStyled>
				<div>오늘 뭐입지?</div>
				<nav>
					<HeaderButtonGroupStyled>
						{PathDataList.map(({ href, text }) => (
							<Link key={href} href={href}>
								<HeaderButtonStyled active={href === pathname}>{text}</HeaderButtonStyled>
							</Link>
						))}
					</HeaderButtonGroupStyled>
				</nav>
			</ContainerStyled>
		</HeaderStyled>
	);
};
export default Header;
