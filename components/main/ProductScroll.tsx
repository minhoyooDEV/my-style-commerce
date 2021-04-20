import { useEffect, useRef } from 'react';
import { Product } from '../../interfaces/product.interface';
import ContainerStyled, { ResponsiveContainerStyled } from '../../styled/container.styled';
import LoadingElement from '../../styled/loading-element.styled';
import MainProductGridList from '../../styled/main-product-grid-list';
import ProductScrollItem from './ProductScrollItem';

interface ProductScrollProps {
	data: Product[];
	onLoadMore?: IntersectionObserverCallback;
	isLoading?: boolean;
}
const ProductScroll = ({ data, onLoadMore, isLoading }: ProductScrollProps) => {
	const scrollRef = useRef<HTMLUListElement>(null);
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
		<ResponsiveContainerStyled>
			<MainProductGridList ref={scrollRef}>
				{data.map(d => (
					<ProductScrollItem key={d.id} data={d} />
				))}
				<div ref={bottomElement} />
			</MainProductGridList>
			{isLoading && <LoadingElement />}
		</ResponsiveContainerStyled>
	);
};

export default ProductScroll;
