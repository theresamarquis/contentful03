import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';


const Header = (props) => {
	return (
		<div>
			<h1>This is a header.</h1>
			{props.headerText}
			<Link to="/contact/">Contact  /</Link>
			<Link to="/about/">About  /</Link>
			<Link to="/">  Home</Link>
			<hr />
		</div>
	);
};


export default Header;

Header.propTypes = {
	headerText: PropTypes.string
};
