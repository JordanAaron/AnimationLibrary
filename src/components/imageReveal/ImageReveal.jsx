import { useState } from 'react'
import carImage from '../../assets/car.jpg'
import './ImageReveal.css'

export const ImageReveal = () => {
	const [runAnimation, setRunAnimation] = useState(false)

	return (
		<>
			<div className="imageContainer">
				<img src={carImage} alt="by Václav Pechar on Unsplash" />
				<div className={`imageCover ${runAnimation ? 'slideDown' : ''}`}></div>
			</div>
			<div className="buttons">
				<button onClick={() => setRunAnimation(true)}>Run</button>
				<button onClick={() => setRunAnimation(false)}>Reset</button>
			</div>
		</>
	)
}
