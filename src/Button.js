import React from 'react';

function Button({ value, disabled }) {
	return (
		<button
			onClick={() => {
				console.log({value}.value);
			}}
			disabled={disabled}
		>
			{value}
		</button>
	);
}

export default Button;
