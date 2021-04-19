import { Product } from '../../interfaces/product.interface';
import MainProductGridItem from '../../styled/main-product-grid-item';

interface ProductScrollItemProps {
	data: Product;
}
const ProductScrollItem = ({ data }: ProductScrollItemProps) => {
	return (
		<MainProductGridItem key={data.id}>
			<img src={data.image.url} width="100%" />
			<div className="overlay">
				<h3 className="shopname">{data.shopName}</h3>
				<h3 className="title">
					<a href={'#' + data.id}>{data.title}</a>
				</h3>
				<h3 className="price">{data.price}</h3>
			</div>
		</MainProductGridItem>
	);
};

export default ProductScrollItem;
