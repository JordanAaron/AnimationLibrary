import { Button } from '../button/Button'
import './Card.css'

export const Card = ({ title, description, onClick }) => {
	return (
		<div className="card">
			<h2>{title}</h2>
			<p>{description}</p>
			<div className="card-button">
				<Button color="var(--coral)" onClick={onClick}>
					View
				</Button>
			</div>
		</div>
	)
}
