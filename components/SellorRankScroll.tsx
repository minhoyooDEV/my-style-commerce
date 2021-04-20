import { Sellor } from '../interfaces/sellor.interface';
import { useEffect, useRef } from 'react';
import ContainerStyled from '../styled/container.styled';
import SellorRankList from '../styled/sellor-rank-list';
import SellorRankListItem from '../styled/sellor-rank-list-item';
import LoadingElement from '../styled/loading-element.styled';
import SellorRankScrollItem from './SellorRankScrollItem';

interface SellorRankScrollProps {
	data: Sellor[];
	onLoadMore: IntersectionObserverCallback;
	isLoading: boolean;
}
const SellorRankScroll = ({ data, onLoadMore, isLoading }: SellorRankScrollProps) => {
	const bottomElement = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let observer: IntersectionObserver;
		if (bottomElement.current && onLoadMore) {
			observer = new IntersectionObserver(onLoadMore, {
				root: null,
				threshold: 0.1,
				rootMargin: '10px',
			});

			observer.observe(bottomElement.current);
		}
		return () => {
			bottomElement?.current && observer.unobserve(bottomElement.current);
		};
	}, [bottomElement, onLoadMore]);

	return (
		<ContainerStyled>
			<SellorRankList>
				{data.map((sellor, idx) => (
					<SellorRankScrollItem key={sellor.id} data={sellor} rank={idx + 1} />
				))}
			</SellorRankList>
			<div ref={bottomElement} />
			{isLoading && <LoadingElement />}
		</ContainerStyled>
	);
};

export default SellorRankScroll;
