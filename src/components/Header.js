import React from 'react'

const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Contact Manager</h2>
                <button className="ui button blue right">login</button>
                <button className="ui button blue right">logout</button>
            </div>
        </div>
    )
}

export default Header;
