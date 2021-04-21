import { Product } from '../interfaces/product.interface';
import MainProductGridItem, {
	TitleStyled,
	OverlayStyled,
	ImgStyled,
	PriceStyled,
	ShopnameStyled,
} from '../styled/main-product-grid-item';
import { toCommaNum } from '../utiles/formatUtils.';

interface ProductScrollItemProps {
	data: Product;
}
const ProductScrollItem = ({ data }: ProductScrollItemProps) => {
	return (
		<MainProductGridItem key={data.id}>
			<a target="_blank" rel="noopener noreferrer" href={data.mobileUrl || ''}>
				<ImgStyled src={data.image.url} loading="lazy" alt={data.title} />
				<OverlayStyled>
					<ShopnameStyled>{data.shopName}</ShopnameStyled>
					<TitleStyled>{data.title}</TitleStyled>
					<PriceStyled>{toCommaNum(data.price)}</PriceStyled>
				</OverlayStyled>
			</a>
		</MainProductGridItem>
	);
};

export default ProductScrollItem;
