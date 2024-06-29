import { useRef } from 'react'
import './Modal.css'

export const Modal = ({ children, title, onClose }) => {
	const modalRef = useRef(null)

	return (
		<div
			className="modal-background"
			onClick={(event) => {
				if (modalRef.current && !modalRef.current.contains(event.target)) {
					onClose()
				}
			}}
		>
			<div className="modal" ref={modalRef}>
				<h2>{title}</h2>
				{children}
			</div>
		</div>
	)
}
