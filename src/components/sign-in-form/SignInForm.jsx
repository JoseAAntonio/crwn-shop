import { useState, useContext } from "react";

import { FormInput } from "../form-input/FormInput";
import { Button } from "../button.jsx/Button";

import { userContext } from "../../contexts/UserContext";

import "./SignInForm.styles.scss";

import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

//NOTE - initialized value for this 4 values
const defaultFormFields = {
	email: "",
	password: "",
};

export const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	//NOTE - from context
	const { setCurrentUser } = useContext(userContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);

			//NOTE - accessed by context
			setCurrentUser(user);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect password");
					break;
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-in-container">
			<h2>Already have an account?</h2>
			<span>Sign In with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<div className="buttons-container">
					<Button type="submit">Sig In</Button>
					<Button buttonType="google" onClick={signInWithGoogle}>
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};
