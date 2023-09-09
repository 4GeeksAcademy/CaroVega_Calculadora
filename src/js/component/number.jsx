import React from "react";

const Number = () => {
	return (
		<div className="keyboard">
            <div className ="rowcal">
                <div className="button operation"><p>C</p></div>
                <div className="button operation">+-</div>
                <div className="button operation">%</div>
                <div className="button operation">-</div>
            </div>
            <div className ="rowcal">
			    <div className="button text-center"><p>7</p></div>
                <div className="button"><p>8</p></div>
                <div className="button"><p>9</p></div>
                <div className="button operation">X</div>
            </div>
            <div className ="rowcal">
                <div className="button">4</div>
                <div className="button">5</div>
                <div className="button">6</div>
                <div className="button operation">-</div>
            </div>
            <div className ="rowcal">
                <div className="button">1</div>
                <div className="button">2</div>
                <div className="button">3</div>
                <div className="button operation">+</div>
            </div>
            <div className ="rowcal">
                <div className="button">0</div>
                <div className="button operation">.</div>
                <div className="button operationequal">=</div>
            </div>
        </div>
		
	);
};

export default Number;
