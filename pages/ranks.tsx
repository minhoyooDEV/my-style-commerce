import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useCallback, useState } from 'react';
import SellorRankScroll from '../components/SellorRankScroll';
import { ResponseSellors } from '../interfaces/sellor.interface';
import { useStore } from '../modules/stores';

interface RanksPageProps {}

const RanksPage = ({}: RanksPageProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const { sellorStore } = useStore();

	const handleLoadMore = useCallback(
		async (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting && !isLoading && sellorStore.next) {
				try {
					setIsLoading(true);
					await sellorStore.loadSellors();
				} catch (error) {
					console.error({ error });
				} finally {
					setIsLoading(false);
				}
			}
		},
		[sellorStore.next, sellorStore.list, isLoading],
	);

	return (
		<>
			<Head>
				<title>지금 제일 잘나가는 브랜드! 🥇🥈🥉 - MY-STYLE</title>
				<meta
					property="og:title"
					content={`지금 제일 잘나가는 브랜드! 🥇🥈🥉 - MY-STYLE`}
					key="title"
				/>
			</Head>
			<SellorRankScroll
				data={sellorStore.list}
				onLoadMore={handleLoadMore}
				isLoading={!!sellorStore.next && isLoading}
			/>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	// console.log('RanksPage - getServerSideProps');
	const response = await fetch(process.env.NEXT_PUBLIC_MALLS_FIRST_REQ_API);
	const data = (await response.json()) as ResponseSellors;
	return {
		props: {
			sellorStore: { list: data.data, pagination: data.pagination },
		},
	};
};

export default RanksPage;
