import { Sellor } from '../interfaces/sellor.interface';
import SellorRankListItem, {
	ImgStyled,
	MedalStyled,
	InfoStyled,
	RankStyled,
} from '../styled/sellor-rank-list-item';

interface SellorRankScrollItemProps {
	data: Sellor;
	rank: number;
}
const SellorRankScrollItem = ({ data, rank }: SellorRankScrollItemProps) => (
	<SellorRankListItem key={data.id}>
		<RankStyled>
			<MedalStyled rank={rank}>{rank}</MedalStyled>
		</RankStyled>
		<ImgStyled>
			<img src={data.image.url} />
		</ImgStyled>
		<InfoStyled>
			<h3>{data.name}</h3>
			<p>{data.description}</p>
		</InfoStyled>
	</SellorRankListItem>
);

export default SellorRankScrollItem;
