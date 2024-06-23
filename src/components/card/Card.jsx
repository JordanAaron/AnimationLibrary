import './Card.css'
import { Button } from '../button/Button'

export const Card = ({ title, description }) => {
	return (
		<div className="card">
			<h2>{title}</h2>
			<p>{description}</p>
			<div className="card-button">
				<Button color="var(--coral)">View</Button>
			</div>
		</div>
	)
}
