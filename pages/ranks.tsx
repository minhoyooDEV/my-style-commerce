import { useCallback, useState } from 'react';
import SellorRankScroll from '../components/SellorRankScroll';
import { Sellor, ResponseSellors } from '../interfaces/sellor.interface';
import { Pagination } from '../interfaces/default.interface';
import { GetServerSideProps } from 'next';

const FIRST_MALLS_API_URL =
	'https://gist.githubusercontent.com/styleshare-automation/c0ecddc18a84270128f55efeace2311b/raw/ad0f0697bfe8673fde98ac7bce822ccf5f89a75b/first-mall-response.json';
interface RanksPageProps {
	sellors: Sellor[];
	pagination: Pagination;
}

const RanksPage = ({ sellors: _sellors, pagination }: RanksPageProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [sellors, setSellors] = useState(_sellors || []);
	const [next, setNext] = useState(pagination?.next || '');

	const handleLoadMore = useCallback(
		async (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting && !isLoading && !!next) {
				try {
					setIsLoading(true);
					const response = await fetch(next);
					const data = JSON.parse(await response.text()) as ResponseSellors;
					setSellors([...sellors, ...data.data]);
					setNext(data.pagination.next || '');
				} catch (error) {
					console.log(error);
				} finally {
					setIsLoading(false);
				}
			}
		},
		[next, sellors, isLoading],
	);

	return (
		<SellorRankScroll data={sellors} onLoadMore={handleLoadMore} isLoading={!!next && isLoading} />
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch(FIRST_MALLS_API_URL);
	const data = JSON.parse(await response.text()) as ResponseSellors;
	return { props: { sellors: data.data, pagination: data.pagination } };
};

export default RanksPage;
