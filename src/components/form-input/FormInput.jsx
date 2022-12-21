import "./FormInput.styles.scss";

export const FormInput = ({ label, ...otherProps }) => {
	return (
		<div className="group">
			<input className="form-input" {...otherProps} />
			{label ? (
				<label
					className={`${
						otherProps.value.length ? "shrink" : null
					} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

//Another way of receiving the data from the SignUpForm componente intead of spreading "...otherProps"

// export const FormInput = ({ label, inputOptions }) => {
// 	return (
// 		<div className="group">
// 			<input className="form-input" {inputOptions} />
// 			{label ? (
// 				<label
// 					className={`${
// 						inputOptions.value.length ? "shrink" : null
// 					} form-input-label`}
// 				>
// 					{label}
// 				</label>
// 			) : null}
// 		</div>
// 	);
// };
