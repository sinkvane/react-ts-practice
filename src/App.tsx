import './index.css';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';

function App() {
	return (
		<>
			<Navigation></Navigation>
			<Routes>
				<Route path="/" element={<ProductsPage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</>
	);
}

export default App;
