import React, {useState} from "react";
import Button from "./button";
import Screen from "./screen";
//include images into your bundle


//create your first component
const Home = () => {
	const[valor,setvalor]=useState(0);
	function handleClick(i){
		setvalor(i);
	}
	
	return (
		<div className="calculator">
			<div className="bodyCal mt-5 p-2">
				<Screen result={valor}/>
				<div className="keyboardCal">
            		<div className ="rowcal">
                		<Button text="C" nameC='button' onButtonClick={() => handleClick('C')}/>
                		<Button text="+-" nameC='button' onButtonClick={() => handleClick('+-')}/>
                		<Button text="%" nameC='button' onButtonClick={() => handleClick('%')}/>
                		<Button text ="-" nameC='button' onButtonClick={() => handleClick('-')}/>
            		</div>
            		<div className ="rowcal">
			    		<Button text='7' nameC='button'  onButtonClick={() => handleClick('7')}/>
                		<Button text='8' nameC='button' onButtonClick={() => handleClick('8')}/>
                		<Button text='9' nameC='button' onButtonClick={() => handleClick('9')}/>
                		<Button text='x' nameC='button' onButtonClick={() => handleClick('x')}/>
           			</div>
            		<div className ="rowcal">
                		<Button text='4' nameC='button' onButtonClick={() => handleClick('4')}/>
                		<Button text='5' nameC='button' onButtonClick={() => handleClick('5')}/>
                		<Button text='6' nameC='button' onButtonClick={() => handleClick('6')}/>
               			<Button text='-' nameC='button' onButtonClick={() => handleClick('-')}/>
            		</div>
            		<div className ="rowcal">
                		<Button text='1' nameC='button' onButtonClick={() => handleClick('1')}/>
                		<Button text='2' nameC='button' onButtonClick={() => handleClick('2')}/>
                		<Button text='3' nameC='button' onButtonClick={() => handleClick('3')}/>
                		<Button text='+' nameC='button' onButtonClick={() => handleClick('+')}/>
            		</div>
            		<div className ="rowcal">
                	<Button text='0' nameC='button' onButtonClick={() => handleClick('0')}/>
                	<Button text='.' nameC='button' onButtonClick={() => handleClick('.')}/>
                	<Button text='=' nameC='button operationequal' onButtonClick={() => handleClick('=')}/>
            		</div>
        		</div>
			</div>
		</div>
			
	);
};

export default Home;
