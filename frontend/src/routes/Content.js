import React from 'react';

class Content extends React.Component {
    constructor() {
        super();
        
        this.hitsCheck = this.hitsCheck.bind(this);
        
    }
    
    hitsCheck(v) {
        if(v > 0) 
            return <p>{this.props.arr.hits}명 추천</p>;
        
    }
    
    render() {
        return (
            <li>
                <img></img>
                
                <div className="info">
                    <p className="job">
                        {this.props.arr.job}
                    
                    </p>
                    
                    <p className="company">
                        {this.props.arr.name}
                    
                    </p>
                    
                    <p className="compensation">
                        채용보상금 {this.props.arr.compensation}원
                    
                    </p>
                    
                </div>
                
                <div className="bottom">
                    <p className="hits">
                        {this.props.arr.hits > 0 && <span>{this.props.arr.hits}명 추천</span>}
                    
                    </p>

                    <a className="heart"></a>
                
                </div>
                
            </li>
        
        );
        
    }
    
}

export default Content;