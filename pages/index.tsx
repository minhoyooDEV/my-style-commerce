import { GetServerSideProps } from 'next';
import { useCallback, useState } from 'react';
import ProductScroll from '../components/ProductScroll';
import { Pagination } from '../interfaces/default.interface';
import { Product, ResponseProducts } from '../interfaces/product.interface';

const FIRST_GOODS_API_URL =
	'https://gist.githubusercontent.com/styleshare-automation/c0ecddc18a84270128f55efeace2311b/raw/1cc13eeb3492199ead7123dc508cd767d12c47ba/first-goods-response.json';
interface MainPageProps {
	products: Product[];
	pagination: Pagination;
}

const MainPage = ({ products: _products, pagination }: MainPageProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState(_products || []);
	const [next, setNext] = useState(pagination?.next || '');

	const handleLoadMore = useCallback(
		async (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting && !isLoading && !!next) {
				try {
					setIsLoading(true);
					const response = await fetch(next);
					const data = JSON.parse(await response.text()) as ResponseProducts;
					setProducts([...products, ...data.data]);
					setNext(data.pagination.next || '');
				} catch (error) {
					console.log(error);
				} finally {
					setIsLoading(false);
				}
			}
		},
		[next, products, isLoading],
	);
	return (
		<ProductScroll data={products} onLoadMore={handleLoadMore} isLoading={!!next && isLoading} />
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch(FIRST_GOODS_API_URL);
	const data = JSON.parse(await response.text()) as ResponseProducts;
	return { props: { products: data.data, pagination: data.pagination } };
};

export default MainPage;
