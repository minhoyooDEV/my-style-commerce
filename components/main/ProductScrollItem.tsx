import { Product } from '../../interfaces/product.interface';
import ContainerStyled from '../../styled/container.styled';
import MainProductGridList from '../../styled/main-product-grid-list';
import ProductScrollItem from './ProductScroll';

interface ProductScrollProps {
	data: Product[];
}
const ProductScroll = ({ data }: ProductScrollProps) => {
	return (
		<ContainerStyled>
			<MainProductGridList>
				{data.map(d => (
					<ProductScrollItem key={d.id} data={d} />
				))}
			</MainProductGridList>
		</ContainerStyled>
	);
};

export default ProductScroll;
