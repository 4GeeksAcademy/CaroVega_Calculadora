import React from "react";

const Button = (prop) => {

	
	return <button className={prop.nameC} onClick={prop.onButtonClick}>{prop.text}</button>;
};

export default Button;