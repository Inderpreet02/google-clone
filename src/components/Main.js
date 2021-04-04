import Search from './Search';
import React from 'react';
import "./Main.css";

function Main() {


    return (
        <div className="main">
            <div className="main__container">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt=""/>
                <Search/>
                <div className="main__containerButtons">
                    <button type="submit">Google Search</button>
                    <button>I'm Feeling Lucky</button>
                </div>
            </div>
        </div>
    )
}

export default Main
