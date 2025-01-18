import { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

const ProductData: IProduct = {
	title: '',
	price: 13.5,
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
	const [error, setError] = useState('');

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();

		setError('');

		if (value.trim().length === 0) {
			setError('Please enter valid title');
			return;
		}

		ProductData.title = value;

		const response = await axios.post<IProduct>('https://fakestoreapi.com/products', ProductData);

		onCreate(response.data);
	};

	const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="enter product title"
				value={value}
				onChange={changeHandler}
			/>

			{error && <ErrorMessage error={error} />}

			<button type="submit" className="py-2 px-4 border bg-yellow-400">
				Create
			</button>
		</form>
	);
}

export default CreateProduct;
