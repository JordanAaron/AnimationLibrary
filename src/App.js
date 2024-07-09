import { useState } from 'react'
import { Card, Modal, ImageReveal } from './components'
import { animationCards } from './content'
import './App.css'

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedCard, setSelectedCard] = useState(null)

	const handleOpenModal = (card) => {
		setSelectedCard(card)
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
		setSelectedCard(null)
	}

	const renderModalContent = () => {
		switch (selectedCard?.title) {
			case 'Image Reveal':
				return <ImageReveal />
			default:
				return null
		}
	}

	return (
		<div className="App">
			{isModalOpen && selectedCard && (
				<Modal onClose={handleCloseModal} card={selectedCard}>
					{renderModalContent()}
				</Modal>
			)}
			<main className="main">
				<h1 className="title">Animation Library</h1>
				<p className="description">
					This is a library of cool animations that you can include in your
					website.
				</p>
				<div className="animation-cards">
					{animationCards.map((card, index) => (
						<Card
							key={index}
							title={card.title}
							description={card.description}
							onClick={() => handleOpenModal(card)}
						/>
					))}
				</div>
			</main>
		</div>
	)
}

export default App
