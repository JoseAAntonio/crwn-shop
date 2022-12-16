import { SignUpForm } from "../../components/sign-up-form/SignUpForm";
import {
	signInWithGooglePopup,
	createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={logGoogleUser}>Sign In with Google</button>
			<SignUpForm />
		</div>
	);
};
