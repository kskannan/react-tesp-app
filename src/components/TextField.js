import React  from "react";
import './TextField.css'

const TextField = () => {
	return (
		<div className="textField">
			<div className="label">
				<label>Name:
					<input type="text" name="name" className="text"/>	
				</label>
			</div>
			<div className="label">
				<label>Card Number:
					<input type="text" name="cardNumber" className="text"/>	
				</label>
			</div>
			<div className="label">
				<label>Card Limit:
					<input type="text" name="cardLimit" className="text"/>	
				</label>
			</div>
			
			<div className="label">
				<input type="submit" value="Submit" className="button"/>
			</div>
		</div>
	);
}

export default TextField;