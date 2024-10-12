import React from 'react';
import './Home.css';
import './Journal.css'

function Journal() {
    return (
        <div className="TitleWrapper">
            <h1>Journal</h1>
            <div className="Journal">
                <div className="Journal-message">
                    Sorry, we don’t have any publications yet this year, but please check back later to see what our
                    team
                    has created!
                </div>
            </div>
        </div>
    );
}

export default Journal;
