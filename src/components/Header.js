import React from 'react'

function Header({ onDarkModeClick, isItDark }) {
    return(
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isItDark ? "Dark" : "Light"} Mode
        </button>
    </header>
    )
}

export default Header