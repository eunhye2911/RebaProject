import React from 'react';
import Header from './Header';
import Content from './Content';
import './Content.css';
import axios from 'axios';

class Company extends React.Component {
    constructor() {
        super();
        
        this.state = {
            Array : []
            
        };
        
        this.getDataFromAxios = this.getDataFromAxios.bind(this);

    }
    
    componentDidMount() {
        if(this.props.login == false)
            this.props.history.push('/login');
        
        else{
            axios.get('http://localhost:4000/company').then(res => {

                this.setState({Array : this.state.Array.concat(res.data.company)});

            });
            
        }
        
        
    }
    
    getDataFromAxios() {
        
        
    }
    
    render() {
        return (
            <div className="container">
                <Header />
            
                <ul className="list">
                    {
                        this.state.Array.map((v) => {
                            return (<Content arr={v} />)
                        })
                        
                    }
                    
                </ul>
            
            </div>
        
        );
        
    }
    
}

export default Company;