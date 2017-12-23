import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor() {
        super();
        
//        console.log(this.props.login);
        
    }
    
    render() {        
        return (
            <div className="menu">
                <h2>Web</h2>
            
                <div className="right">
                    <a>logout</a>    
            
                </div>
                
            </div>
        
        );
        
    }
    
}

export default Header;