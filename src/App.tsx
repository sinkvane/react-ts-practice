import './index.css';
import { Product } from './components/product';
import { useProducts } from './hooks/products';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Modal from './components/Modal';
import CreateProduct from './components/CreateProduct';
import { useState } from 'react';
import { IProduct } from './models';

function App() {
	const { error, loading, products, addProduct } = useProducts();

	const [modal, setModal] = useState(true);

	const createHandler = (product: IProduct) => {
		setModal(false);
		addProduct(product);
	};

	return (
		<>
			<div className="container mx-auto max-w-2xl pt-5">
				{loading && <Loader />}
				{error && <ErrorMessage error={error} />}
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
				{modal && (
					<Modal title="Creation of product">
						<CreateProduct onCreate={createHandler} />
					</Modal>
				)}
			</div>
		</>
	);
}

export default App;
