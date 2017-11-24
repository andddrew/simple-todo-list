import React from 'react';
import './InputBar.css';


const inputBar = ( props ) => (
		<input className="inputBar" onKeyPress={ props.enterKey } type="text" placeholder="Add a Todo" />
);

export default inputBar;