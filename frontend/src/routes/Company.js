import React from 'react';
import Header from './Header';
import Content from './Content';

class Company extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Content />
            
            </div>
        
        );
        
    }
    
}

export default Company;