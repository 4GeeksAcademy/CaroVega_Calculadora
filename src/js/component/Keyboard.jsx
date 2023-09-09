import React from "react";
import Button from "./button";

const Keyboard = () => {
	return (
		<div className="keyboardCal">
            <div className ="rowcal">
                <Button text="C" nameC='button'/>
                <Button text="+-" nameC='button'/>
                <Button text="%" nameC='button'/>
                <Button text ="-" nameC='button'/>
            </div>
            <div className ="rowcal">
			    <Button text='7' nameC='button'/>
                <Button text='8' nameC='button'/>
                <Button text='9' nameC='button'/>
                <Button text='x' nameC='button'/>
            </div>
            <div className ="rowcal">
                <Button text='4' nameC='button'/>
                <Button text='5' nameC='button'/>
                <Button text='6' nameC='button'/>
                <Button text='-' nameC='button'/>
            </div>
            <div className ="rowcal">
                <Button text='1' nameC='button'/>
                <Button text='2' nameC='button'/>
                <Button text='3' nameC='button'/>
                <Button text='+' nameC='button'/>
            </div>
            <div className ="rowcal">
                <Button text='0' nameC='button'/>
                <Button text='.' nameC='button'/>
                <Button text='=' nameC='button operationequal'/>
            </div>
        </div>
		
	);
};

export default Keyboard;
