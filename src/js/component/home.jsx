import React, {useState} from "react";
import Button from "./button";
import Screen from "./screen";
//include images into your bundle


//create your first component
const Home = () => {
	const[total,setTotal]=useState('');
	const[next,setNext]=useState('');
	const[valor,setvalor]=useState('');
	
	function handleClick(i, typedata){
		if(typedata=='number'){
			setvalor(valor+i);
			setTotal(total+i);
		}else if(typedata=='decimal'){
			decimalCalculator();
		}else if(typedata=='clear'){
			clearCalculator();
		}else if(typedata=='signed'){
			signedCalculator();
		}else{
			operationCalculator(i);
		}
	};

	function operationCalculator(operation){
		if(operation=='+'){
			sum();
		}
	}
	function sum(){
		setTotal(valor);
		setvalor('');
	}

	function decimalCalculator(){
		if( valor==''){setvalor('0'+'.');}else{setvalor(valor+'.');}
	}
	function clearCalculator(){
		setTotal('');
		setvalor('');
	}
	function signedCalculator(){
		if(valor!='' && valor[0]=='-'){
			setvalor(valor.slice(1));
		}else if(valor!='' && valor[0]!='-'){
			setvalor('-'+ valor);
		}
	}
	
	return (
		<div className="calculator">
			<div className="bodyCal mt-5 p-2">
				<Screen result={valor != ''? valor:0}/>
				<div className="keyboardCal">
            		<div className ="rowcal">
                		<Button text="C" nameC='button' onButtonClick={() => handleClick('C','clear')}/>
                		<Button text="+-" nameC='button' onButtonClick={() => handleClick('+-', 'signed')}/>
                		<Button text="%" nameC='button' onButtonClick={() => handleClick('%', 'operation')}/>
                		<Button text ="-" nameC='button' onButtonClick={() => handleClick('/', 'operation')}/>
            		</div>
            		<div className ="rowcal">
			    		<Button text='7' nameC='button'  onButtonClick={() => handleClick('7', 'number')}/>
                		<Button text='8' nameC='button' onButtonClick={() => handleClick('8', 'number')}/>
                		<Button text='9' nameC='button' onButtonClick={() => handleClick('9', 'number')}/>
                		<Button text='x' nameC='button' onButtonClick={() => handleClick('x', 'operation')}/>
           			</div>
            		<div className ="rowcal">
                		<Button text='4' nameC='button' onButtonClick={() => handleClick('4', 'number')}/>
                		<Button text='5' nameC='button' onButtonClick={() => handleClick('5', 'number')}/>
                		<Button text='6' nameC='button' onButtonClick={() => handleClick('6', 'number')}/>
               			<Button text='-' nameC='button' onButtonClick={() => handleClick('-', 'operation')}/>
            		</div>
            		<div className ="rowcal">
                		<Button text='1' nameC='button' onButtonClick={() => handleClick('1', 'number')}/>
                		<Button text='2' nameC='button' onButtonClick={() => handleClick('2', 'number')}/>
                		<Button text='3' nameC='button' onButtonClick={() => handleClick('3', 'number')}/>
                		<Button text='+' nameC='button' onButtonClick={() => handleClick('+', 'operation')}/>
            		</div>
            		<div className ="rowcal">
                	<Button text='0' nameC='button' onButtonClick={() => handleClick('0', 'number')}/>
                	<Button text='.' nameC='button' onButtonClick={() => handleClick('.', 'decimal')}/>
                	<Button text='=' nameC='button operationequal' onButtonClick={() => handleClick('=', 'operation')}/>
            		</div>
        		</div>
			</div>
		</div>
			
	);
};

export default Home;
