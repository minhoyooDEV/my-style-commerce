import SellorRankScroll from '../components/SellorRankScroll';
import { ranks } from '../__mock_data';

interface RanksPageProps {}

const RanksPage = (props: RanksPageProps) => {
	return <SellorRankScroll data={ranks.data} />;
};

export default RanksPage;
