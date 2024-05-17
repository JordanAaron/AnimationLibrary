import './AnimationWrapper.css'

export const AnimationWrapper = ({ children, title }) => {
	return (
		<div className="wrapper">
			<h3>{title}</h3>
			<div className="animationContainer">{children}</div>
		</div>
	)
}
