import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { IProduct } from '../models';

export function useProducts() {
	const [products, getProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	async function fetchProducts() {
		try {
			setError('');
			setLoading(true);
			const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
			getProducts(response.data);
			setLoading(false);
		} catch (e: unknown) {
			const error = e as AxiosError;
			setLoading(false);
			setError(error.message);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return { products, error, loading };
}
