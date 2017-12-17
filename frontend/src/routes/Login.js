import React from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';
import axios from 'axios';

import './Login.css';

class Login extends React.Component {
    constructor() {
        super();
        
        this.state = {
            username : '',
            userpass : ''
            
        };
        
        this.handleUserName = this.handleUserName.bind(this);
        this.handleUserPass = this.handleUserPass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    handleUserName(e) {
        this.setState({username : e.target.value});
        
    }
    
    handleUserPass(e) {
        console.log(e.target.value);
        this.setState({userpass : e.target.value});
        
    }
    
    handleSubmit() {
        if(this.state.username.length == 0 
           || this.state.userpass.length == 0) {
            alert('입력하세요.');
//            this.history.back();
            
        } else {
            // 백엔드 포트로 데이터 전송
            axios.post('http://localhost:4000/login', {
                username : this.state.username,
                userpass : this.state.userpass
                
            }).then((response) => {
                console.log(response.data);
                let {success, error} = response.data;
                let {history} = this.props;
                
                if(success === 1)
                    history.push('/company');
                
                else if(success === 2)
                    history.push('/register');
                
                else if(error === -1)
                    return;
                
            });
            
        }
        
    }
    
    render () {
        return (
            <div className="login-bg">
                <div className="login">
                    <Form>
                        <Form.Field>
                            <label>User Name</label>
                            <input placeholder="User Name" onChange={this.handleUserName} />

                        </Form.Field>

                        <Form.Field>
                            <label>User Password</label>
                            <input placeholder="User Password" onChange={this.handleUserPass} type="password" />

                        </Form.Field>
                        
                        <Button onClick={this.handleSubmit}>전송</Button>

                    </Form>

                </div>
            </div>
        
        );
        
    }
    
}

export default Login;