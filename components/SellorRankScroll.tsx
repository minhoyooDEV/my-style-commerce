import { Sellor } from '../interfaces/sellor.interface';
import { useEffect, useRef } from 'react';
import ContainerStyled from '../styled/container.styled';
import SellorRankList from '../styled/sellor-rank-list';
import SellorRankListItem from '../styled/sellor-rank-list-item';
import LoadingElement from '../styled/loading-element.styled';

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
				{data.map((d, idx) => (
					<SellorRankListItem key={d.id}>
						<div className="rank">
							<div className="medal">{idx + 1}</div>
						</div>
						<div className="img">
							<img src={d.image.url} />
						</div>
						<div className="info">
							<h3 className="name">{d.name}</h3>
							<p className="desc">{d.description}</p>
						</div>
					</SellorRankListItem>
				))}
			</SellorRankList>
			<div ref={bottomElement} />
			{isLoading && <LoadingElement />}
		</ContainerStyled>
	);
};

export default SellorRankScroll;
