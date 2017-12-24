import React from 'react';
import './Details.css';
import axios from 'axios';


class Details extends React.Component {
    constructor() {
        super();
        
        this.state = {
            currentData : []
            
        };
        
//        console.log(this.state.currentData);
        
    }
    
    componentDidMount() {
       const index = this.props.match.params.id; axios.get(`http://localhost:4000/company/${index}`).then((res) => {
//           console.log(res.data)
            this.setState({currentData : this.state.currentData.concat(res.data)});
            
        });
        
    }
    
    render() {
        const {params} = this.props.match;
        const {currentData} = this.state;
        
        return (
            <div className="Details">
                <div className="container">
                    
                    <div className="left">
                        <h1>{currentData.name}</h1>
                        {console.log(currentData)}
                        <div className="photo"></div>
                        <div calssName="desc">
                            <div className="desc_info">
                                <h2>채용직군</h2>
                                <div>회사명</div>
                            
                            </div>
                            
                            <div className="desc_body">
                            
                            
                            </div>
                        
                        </div>
                        
                    
                    </div>
                    
                    <div className="right">
                        
                    
                    </div>
                    
                </div>
            
            </div>
        
        );
        
    }    
    
}

export default Details;