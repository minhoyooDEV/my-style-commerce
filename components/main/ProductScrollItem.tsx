import { Product } from '../../interfaces/product.interface';
import MainProductGridItem, {
	TitleStyled,
	OverlayStyled,
	ImgStyled,
	PriceStyled,
	ShopnameStyled,
} from '../../styled/main-product-grid-item';
import { toCommaNum } from '../../utiles/formatUtils.';

interface ProductScrollItemProps {
	data: Product;
}
const ProductScrollItem = ({ data }: ProductScrollItemProps) => {
	return (
		<MainProductGridItem key={data.id}>
			<ImgStyled src={data.image.url} loading="lazy" alt={data.title} />
			<OverlayStyled>
				<ShopnameStyled>{data.shopName}</ShopnameStyled>
				<TitleStyled>
					<a href={'#' + data.id}>{data.title}</a>
				</TitleStyled>
				<PriceStyled>{toCommaNum(data.price)}</PriceStyled>
			</OverlayStyled>
		</MainProductGridItem>
	);
};

export default ProductScrollItem;
