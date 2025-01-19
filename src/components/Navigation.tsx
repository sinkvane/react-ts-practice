import { Link } from 'react-router-dom';

export function Navigation() {
	return (
		<nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
			<span className="font-bold ">React 2025</span>
			<span className="flex gap-5">
				<Link to="/">Products</Link>
				<Link to="/about">About</Link>
			</span>
		</nav>
	);
}
