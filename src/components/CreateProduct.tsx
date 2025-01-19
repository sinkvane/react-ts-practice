import { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

const ProductData: IProduct = {
	title: '',
	price: 0,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 42,
		count: 8,
	},
};

interface CreateProductProps {
	onCreate: (product: IProduct) => void;
}

function CreateProduct({ onCreate }: CreateProductProps) {
	const [value, setValue] = useState('');
	const [price, setPrice] = useState('');
	const [error, setError] = useState('');

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();

		setError('');

		if (value.trim().length === 0 || !price || parseFloat(price) <= 0 || Number.isNaN(Number(price))) {
			setError('Please enter valid value');
			return;
		}

		ProductData.title = value;
		ProductData.price = parseFloat(price);

		const response = await axios.post<IProduct>('https://fakestoreapi.com/products', ProductData);

		onCreate(response.data);
	};

	const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target as HTMLInputElement;
		setValue(input.value);
	};

	const changePriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target as HTMLInputElement;
		setPrice(input.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="enter product title"
				value={value}
				onChange={changeTitleHandler}
			/>
			<input
				type="number"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="enter product price"
				value={price}
				onChange={changePriceHandler}
			/>

			{error && <ErrorMessage error={error} />}

			<button type="submit" className="py-2 px-4 border bg-yellow-400">
				Create
			</button>
		</form>
	);
}

export default CreateProduct;
