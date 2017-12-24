import React from 'react';
import './Details.css';
import axios from 'axios';
import SimpleSlider from './SimpleSlider';
import Header from './Header';

class Details extends React.Component {
    constructor() {
        super();
        
        this.state = {
            currentData : {}
            
        };
        
//        console.log(this.state.currentData);
        
    }
    
    componentDidMount() {
       const index = this.props.match.params.id; axios.get(`http://localhost:4000/company/${index}`).then((res) => {
            this.setState({currentData : res.data});
            
        });
        
    }
    
    render() {
        const {params} = this.props.match;
        const {currentData} = this.state;
        
        return (
            <div>
                <Header />
                <div className="Details">
                    <div className="container">

                        <div className="left">
                            {console.log(currentData)}
                            <div className="photo">

                            </div>
                            <div calssName="desc">
                                <div className="desc_info">
                                    <h2>{currentData.recruit}</h2>
                                    <div>{currentData.name}</div>

                                </div>

                                <div className="desc_body">


                                </div>

                            </div>


                        </div>

                        <div className="right">
                            <div>{currentData.favorite}</div>

                        </div>

                    </div>

                </div>
            </div>
        
        );
        
    }    
    
}

export default Details;