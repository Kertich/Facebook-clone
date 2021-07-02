import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <img alt="File:Facebook Logo.png" src="//upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" 
            decoding="async" 
            width="512" 
            height="513" 
            data-file-width="512" 
            data-file-height="513"/>
            <div className="header__input">
                <SearchIcon />
                <input type="text" />
            </div>
            </div>

            <div className= "header__middle"></div>

            <div className="header__right"></div>
        </div>
    )
}

export default Header
