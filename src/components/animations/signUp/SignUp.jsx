import { useState } from 'react'

import './SignUp.css'

export const SignUp = () => {
	const [isSignInForm, setIsSignInForm] = useState(false)

	return (
		<div className="container">
			<div className="button" onClick={() => setIsSignInForm(true)}>
				Sign In
			</div>
			<div className="form">
				<div className="form-header">
					<>Sign In</>
					<button onClick={() => setIsSignInForm(false)}>x</button>
				</div>
				<div className="form-buttons">
					<button>Continue with Google</button>
					<button>Continue with Apple</button>
				</div>
				<div className="form-separator">
					<div className="form-separator-line" />
					<span>Or</span>
					<div className="form-separator-line" />
				</div>
				<div className="form-input">
					<input type="email" placeholder="Email" />
					<button type="submit">Continue</button>
				</div>
			</div>
		</div>
	)
}
