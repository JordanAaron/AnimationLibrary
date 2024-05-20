import './Button.css'

export const Button = ({ innerText, onClick: handleClick }) => {
	return (
		<button className="buttonContainer" onClick={handleClick}>
			{innerText}
		</button>
	)
}
