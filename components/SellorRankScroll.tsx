import { Sellor } from '../interfaces/sellor.interface';
import ContainerStyled from '../styled/container.styled';
import SellorRankList from '../styled/sellor-rank-list';
import SellorRankListItem from '../styled/sellor-rank-list-item';

interface SellorRankScrollProps {
	data: Sellor[];
}
const SellorRankScroll = ({ data }: SellorRankScrollProps) => {
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
		</ContainerStyled>
	);
};

export default SellorRankScroll;
