import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ModalState } from './components/context/ModalState.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<ModalState>
			<App />
		</ModalState>
	</BrowserRouter>
);
