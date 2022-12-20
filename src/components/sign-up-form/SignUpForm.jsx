import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

//NOTE - initialized value for this 4 values
const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

export const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	//NOTE - destructures the formFields object to extract its properties.
	const { displayName, email, password, confirmPassword } = formFields;

	console.log(formFields);

	const handleChange = (e) => {
		//NOTE - destructures the name and value properties from the event target
		const { name, value } = e.target;

		//NOTE - The spread operator (...) is used to create a new object that is based on the existing formFields object, but with the property specified by name set to the value specified by value.
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={() => {}}>
				<label>Display Name</label>
				<input
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

				<label>Email</label>
				<input
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<label>Password</label>
				<input
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<label>Confirm Password</label>
				<input
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};
