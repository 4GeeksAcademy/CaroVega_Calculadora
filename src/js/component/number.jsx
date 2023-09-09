import React from "react";

const Number = () => {
	return (
		<div className="keyboard">
            <div className ="rowcal">
                <div className="button operation"><p>C</p></div>
                <div className="button operation"><p>+-</p></div>
                <div className="button operation"><p>%</p></div>
                <div className="button operation"><p>-</p></div>
            </div>
            <div className ="rowcal">
			    <div className="button text-center"><p>7</p></div>
                <div className="button"><p>8</p></div>
                <div className="button"><p>9</p></div>
                <div className="button operation"><p>X</p></div>
            </div>
            <div className ="rowcal">
                <div className="button"><p>4</p></div>
                <div className="button"><p>5</p></div>
                <div className="button"><p>6</p></div>
                <div className="button operation"><p>-</p></div>
            </div>
            <div className ="rowcal">
                <div className="button"><p>1</p></div>
                <div className="button"><p>2</p></div>
                <div className="button"><p>3</p></div>
                <div className="button operation"><p>+</p></div>
            </div>
            <div className ="rowcal">
                <div className="button"><p>0</p></div>
                <div className="button operation"><p>.</p></div>
                <div className="button operationequal"><p>=</p></div>
            </div>
        </div>
		
	);
};

export default Number;
