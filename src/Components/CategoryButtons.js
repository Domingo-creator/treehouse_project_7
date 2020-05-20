import React from 'react';

const CategoryButtons = props => { 
    return (
        <div className="category-buttons">
            <button onClick={ () => props.Clicked('Leaves')}>Leaves</button>
            <button onClick={ () => props.Clicked('Forest')}>Forest</button>
            <button onClick={ () => props.Clicked('Sunset')}>Sunset</button> 
        </div>     
    );
      
}


export default CategoryButtons;