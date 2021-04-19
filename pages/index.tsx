import ProductScroll from '../components/main/ProductScroll';
import { products } from '../__mock_data';

export default function Home() {
	return <ProductScroll data={products.data}></ProductScroll>;
}
