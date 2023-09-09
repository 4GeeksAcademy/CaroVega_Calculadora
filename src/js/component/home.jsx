import React from "react";
import Number from "./number";
import Screen from "./screen";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="calculator">
			<div className="bodyCal mt-5 p-2">
				<Screen/>
				<Number/>
			</div>
		</div>
			
	);
};

export default Home;
