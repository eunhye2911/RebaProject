import React from 'react';
import './Header.css';


class Header extends React.Component {
    constructor() {
        super();        
//        console.log(this.props.login);
        
        this.handleCategory = this.handleCategory.bind(this);
        
    }
    
    handleCategory(str) {
        
        
    }
    
    render() {        
        return (
            <div className="menu">
                <h2>Web</h2>
                
                <ul className="category">
                    <li onClick={()=>{this.handleCategory('all')}}>
                        전체
                    
                    </li>
                    <li onClick={()=>{this.handleCategory('front')}}>
                        프론트엔드 개발자
                    
                    </li>
                    <li onClick={()=>{this.handleCategory('back')}}>
                        백엔드 개발자
                    
                    </li>
                    <li onClick={()=>{this.handleCategory('app')}}>
                        앱 개발자
                    
                    </li>
                    
                </ul>
            
                <div className="right">
                    <a>logout</a>    
            
                </div>
                
            </div>
        
        );
        
    }
    
}

export default Header;