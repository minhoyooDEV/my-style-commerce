import ProductScroll from '../components/main/ProductScroll';
import { Product } from '../interfaces/product.interface';
import { products } from '../__mock_data';

export default function Home() {
	return <ProductScroll data={products.data as Product[]} />;
}
