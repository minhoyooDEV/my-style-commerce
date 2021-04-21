import { observer } from 'mobx-react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useCallback, useState } from 'react';
import ProductScroll from '../components/ProductScroll';
import { ResponseProducts } from '../interfaces/product.interface';
import { useStore } from '../modules/stores';

interface MainPageProps {}

const MainPage = observer(({}: MainPageProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const { productStore } = useStore();

	const handleLoadMore = useCallback(
		async (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting && !isLoading && productStore.next) {
				try {
					setIsLoading(true);
					await productStore.loadProducts();
				} catch (error) {
					console.error({ error });
				} finally {
					setIsLoading(false);
				}
			}
		},
		[productStore.next, productStore.list, isLoading],
	);

	return (
		<>
			<Head>
				<title>오늘 뭐 입지? 👗👑👠 - MY-STYLE</title>
				<meta property="og:title" content={`오늘 뭐 입지? 👗👑👠' - MY-STYLE`} key="title" />
			</Head>
			<ProductScroll
				data={productStore.list}
				onLoadMore={handleLoadMore}
				isLoading={!!productStore.next && isLoading}
			/>
		</>
	);
});

export const getServerSideProps: GetServerSideProps = async () => {
	// console.log('MainPage - getServerSideProps');
	const response = await fetch(process.env.NEXT_PUBLIC_GOODS_FIRST_REQ_API);
	const data = (await response.json()) as ResponseProducts;
	return {
		props: {
			productStore: { list: data.data, pagination: data.pagination },
		},
	};
};

export default MainPage;
