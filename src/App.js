import { useState } from 'react'
import { Card, Modal, ImageReveal, SignUp } from './components'
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

	const cards = [
		{
			title: 'Image Reveal',
			description:
				'An animation that reveals an image when it comes into view.',
		},
		{
			title: 'Sign Up',
			description:
				'An animation that changes your sign up button into a sign up form on click.',
		},
	]

	const renderModalContent = () => {
		switch (selectedCard?.title) {
			case 'Image Reveal':
				return <ImageReveal />
			case 'Sign Up':
				return <SignUp />
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
				<div className="cards">
					{cards.map((card, index) => (
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
