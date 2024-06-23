import './Button.css'

export const Button = ({ children, color, onClick: handleClick }) => {
	return (
		<button
			className="buttonContainer"
			style={{
				backgroundColor: color ? color : 'black',
				borderColor: color ? color : 'black',
			}}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}
