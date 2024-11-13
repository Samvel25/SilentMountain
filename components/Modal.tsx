import React from "react";

interface ModalProps {
	show: boolean;
	title: string;
	message: string;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, title, message, onClose }) => {
	if (!show) return null;

	return (
		<div className="modal show d-block" tabIndex={-1} role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{title}</h5>
						<button type="button" className="close" onClick={onClose}>
							<span>&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>{message}</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={onClose}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
