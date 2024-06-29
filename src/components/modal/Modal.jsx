import { useRef } from 'react'
import './Modal.css'

export const Modal = ({ children, card, onClose }) => {
	const modalRef = useRef(null)

	const { title, description } = card

	return (
		<div
			className="modal"
			onClick={(event) => {
				if (modalRef.current && !modalRef.current.contains(event.target)) {
					onClose()
				}
			}}
		>
			<div className="modal-content" ref={modalRef}>
				<h2>{title}</h2>
				<p>{description}</p>
				<main className="modal-main">
					<div className="animation-container">{children}</div>
					<div className="animation-info">
						<h3>How it works</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							quos.
						</p>
					</div>
				</main>
			</div>
		</div>
	)
}
