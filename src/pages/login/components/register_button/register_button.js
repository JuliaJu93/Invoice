import React, {useEffect} from "react";

function RegisterButton() {
	useEffect(() => {
		fetch('https://api.github.com/users/JuliaJu93')
  			.then((response) => {
    			return response.json();
  			})
  			.then((data) => {
    			console.log(data);
  			});
	}, []);

	return (
		<div>
			<button > Авторизоваться </button>
		</div>
	);
}

export default RegisterButton;
