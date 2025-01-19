import { useState } from 'react';
import { ModalContext } from './ModalContext';

export const ModalState = ({ children }: { children: React.ReactNode }) => {
	const [modal, setModal] = useState(false);

	const open = () => setModal(true);

	const close = () => setModal(false);

	return <ModalContext.Provider value={{ modal, open, close }}>{children}</ModalContext.Provider>;
};
