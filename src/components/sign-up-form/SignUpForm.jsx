import { useState, useContext } from "react";

import { FormInput } from "../form-input/FormInput";
import { Button } from "../button.jsx/Button";

import { userContext } from "../../contexts/UserContext";

import "./SignUpForm.styles.scss";

import {
	createUserDocumentFromAuth,
	createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

//NOTE - initialized value for this 4 values
const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

export const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const { setCurrentUser } = useContext(userContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			setCurrentUser(user);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else {
				console.log("user creation encountered an error", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

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

				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<Button type="submit">Sig Up</Button>
			</form>
		</div>
	);
};

// eslint-disable-next-line no-lone-blocks
{
	// another way to pass this data to FormInput
	/* <FormInput
					//label="Display Name"
					// inputOptions={{
					// 	type: "text",
					// 	required: true,
					// 	onChange: handleChange,
					// 	name: "displayName",
					// 	value: displayName,
					// }}
				/> */
}
