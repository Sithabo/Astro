import React from "react";

function Header(){
    return (
        <div className="header-container">
            <nav style={{padding: '1vw'}}>
                <label style={{fontSize:35, fontFamily: 'Roboto Slab'}}>Sithabo.js</label>
            </nav>
            <header>
                <h1>Adventure Awaits</h1>
            </header>
        </div>
    )
}

export default Header;