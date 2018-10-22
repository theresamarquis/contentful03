import React from "react"
import { Link } from 'gatsby';

export default (props) => {
    return(
        <div>
            <h1>This is a header.</h1>
            {props.headerText}
            <Link to='/contact/'>Contact  /</Link>
            <Link to='/about/'>About  /</Link>
            <Link to="/" >  Home</Link>
            <hr />
        </div>
    )   
}