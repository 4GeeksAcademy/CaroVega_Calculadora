import React from "react";




//create your first component
const Screen = (prop) => {
	return (
		<div className="screenCal">
			<h1>{prop.result}</h1>
		</div>
			
	);
};

export default Screen;