import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

// Any React component defined in src/pages/*.js will automatically become a page. Let’s see this in action.
export default () => (
	<div style={{ color: `purple` }}>
        
		<Header headerText="Hello Gatsby" />
		<p>What a world.</p>
		<img src="https://source.unsplash.com/random/400x200" alt="" /> 
	</div>
)
