import React from "react";
import Number from "./number";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="calculator">
			<Number/>
		</div>
			
	);
};

export default Home;
