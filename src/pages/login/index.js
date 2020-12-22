
import React from 'react'
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { LoginImage } from '../../assets';


const Login = () => {

    const history = useHistory();

    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginImage} className="bg-image" />

            </div>
            <div className="right">
                <h1 className="title">Login</h1>
                <img src="" />
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="your@mail.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Secret word" />
                    </FormGroup>
                    </Form>

                    <div style={{height:30}}/>
                    <Button color="primary" onClick={() => history.push('/mainapp')}>Login</Button>
                    <div style={{height:60}}/>
                    <Link onClick={() => history.push('/register')} style={{display:'flex', justifyContent:'center'}}>Don't have an account? Please Register</Link>

        </div>
            </div>
    )
}

export default Login