import './App.css'
import { Card } from './components'

function App() {
	return (
		<div className="App">
			<main className="main">
				<h1 className="title">Animation Library</h1>
				<p className="description">
					This is a library of cool animations that you can include in your
					website.
				</p>
				<div className="cards">
					<Card
						title="Image Reveal"
						description="An animation that reveals an image when it comes into view."
					/>
					<Card
						title="Sign Up"
						description="An animation that changes your sign up button into a sign up form on click."
					/>
				</div>
			</main>
		</div>
	)
}

export default App
