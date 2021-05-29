import React, { useState } from 'react'

function Header() {



    return (
        <header className="header">
            <div className="logo">Logo</div>
            <ul className="nav">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </header>
    )
}

export default Header
