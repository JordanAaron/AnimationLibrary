import { useState } from 'react'

import { Button } from '../../../components'

import carImage from '../../../assets/car.jpg'

import './ImageReveal.css'

export const ImageReveal = () => {
	const [runAnimation, setRunAnimation] = useState(false)

	return (
		<div className="imageRevealContainer">
			<div className="imageContainer">
				<img src={carImage} alt="by Václav Pechar on Unsplash" />
				<div className={`imageCover ${runAnimation ? 'slideDown' : ''}`}></div>
			</div>
			<div className="buttons">
				<Button
					innerText="Run Animation"
					onClick={() => setRunAnimation(true)}
				/>
				<Button
					innerText="Reset Animation"
					onClick={() => setRunAnimation(false)}
				/>
			</div>
		</div>
	)
}
{
	/* <a href="https://unsplash.com/@venajeborec?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"></a>
<a href="https://unsplash.com/photos/a-blue-car-parked-on-the-side-of-the-road-PqDS7Cn0aEc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"></a> */
}
