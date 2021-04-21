import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ContainerStyled from '../styled/container.styled';
import HeaderButtonGroupStyled from '../styled/header-button-group.styled';
import HeaderButtonStyled from '../styled/header-button.styled';
import HeaderStyled from '../styled/header.styled';

const PathDataList = [
	{ href: '/', text: '상품', title: '오늘 뭐 입지?👗👑👠' },
	{ href: '/ranks', text: '랭킹', title: '젤 잘나가요! 🥇🥈🥉' },
];

const Header = () => {
	const { pathname } = useRouter();
	const [title, setTitle] = useState('');
	useEffect(() => {
		setTitle(PathDataList.find(({ href }) => href === pathname)?.title || '');
	}, [setTitle, pathname]);
	return (
		<HeaderStyled>
			<ContainerStyled>
				<h3>{title}</h3>
				<nav>
					<HeaderButtonGroupStyled>
						{PathDataList.map(({ href, text }) => (
							<Link key={href} href={href} scroll={false}>
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
