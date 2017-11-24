import React from 'react';
import './TodoItems.css';


const todoItems = ( props ) => {
	return props.todos.map( ( todo , index ) => {
		let classes = [ 'todoItem' ];
		if ( todo.finished ) {
			classes.push( 'finished' );
		}
		return <li 
			className={ classes.join( ' ' ) } 
			onClick={ () => props.finClick( index ) }
			key={ index }>{ todo.todo }
		</li>
	} ); 
};


export default todoItems;