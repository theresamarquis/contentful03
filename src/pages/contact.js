import React, { Component } from 'react';
import { Link } from 'gatsby';

class ContactForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			value: ''
		}
	}

    handleSubmit = (event) => {
    	event.preventDefault();
    	alert('A name was submitted: ' + this.state.value);
    }

    changeHandler=(event)=>{
    	this.setState({value: event.target.value})
    };

    render() {
    	return(
    		<div>
    			<Link to="/">Home</Link>
    			<form onSubmit={this.submitHandler}>
    				<label>
                    Email:
    					<input placeholder="email" onChange={this.changeHandler}></input>
    				</label>
    				<input type='submit' value='Submit' ></input>
    			</form>
    		</div>
            
    	)
    }
}

export default ContactForm