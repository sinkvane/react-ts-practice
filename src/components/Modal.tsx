import React from 'react';

interface ModalProps {
	children: React.ReactNode;
	title: string;
	onClose: () => void;
}

function Modal({ children, title, onClose }: ModalProps) {
	return (
		<>
			<div className="fixed bg-black/50 inset-0" onClick={onClose}></div>
			<div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
				<h1 className="text-2xl text-center mb-2">{title}</h1>
				{children}
			</div>
		</>
	);
}

export default Modal;
