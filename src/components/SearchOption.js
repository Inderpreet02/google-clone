import React from 'react'
import "./SearchOption.css"

function SearchOption( {Icon, text} ) {
    return (
        <div className="SearchOption">
            {Icon && <Icon/>}            
            <span>{text}</span>
        </div>
    )
}

export default SearchOption
