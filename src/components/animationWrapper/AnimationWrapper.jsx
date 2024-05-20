import './AnimationWrapper.css'

export const AnimationWrapper = ({ children, title, color }) => {
	return (
		<div
			className="wrapper"
			style={{ backgroundColor: color ? color : '#fff' }}
		>
			<div className="animationContainer">
				<h3>{title}</h3>
				<>{children}</>
			</div>
		</div>
	)
}
