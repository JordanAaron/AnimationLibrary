import './App.css'
import { AnimationWrapper, ImageReveal, SignUp } from './components'

function App() {
	return (
		<div className="App">
			<h1>Animation Library Project</h1>
			<p>
				This is a library of cool animations that you can include in your
				website.
			</p>
			<AnimationWrapper title={'Image Reveal'} color={'#a2c5ac'}>
				<ImageReveal />
			</AnimationWrapper>
			<AnimationWrapper title={'Sign Up'}>
				<SignUp />
			</AnimationWrapper>
		</div>
	)
}

export default App
