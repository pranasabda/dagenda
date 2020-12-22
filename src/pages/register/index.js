import React from 'react'
import './register.css';
import { Link, useHistory } from 'react-router-dom'; 
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { LoginImage, RegisterImage } from '../../assets';
// import { Button, Gap, Input, Link } from '../../components';


const Register = () => {

    const history = useHistory();

    return (
        <div className="main-page">
            <div className="left">
                {/* Illustration  */}
                {/* <h1 className="title">Register</h1> */}
                <img src={RegisterImage} className="bg-image" />

            </div>
            <div className="right">
                {/* <h1 style={{textAlign:'center'}}>Register</h1> */}
                <h1 className="title">Register</h1>
                <img src="" />
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Your name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="your@mail.com" />
                    </FormGroup>
                    {/* <div style={{height:18}}/> */}
                    <FormGroup>
                        <Label for="exampleEmail">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Secret word" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Confirm Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Secret word" />
                    </FormGroup>
                    </Form>

                    <div style={{height:30}}/>
                    <Button color="success" onClick={() => history.push('/login')}>Register</Button>
                    <div style={{height:60}}/>
                    <Link /* onClick={() => history.push('/register')} */ style={{display:'flex', justifyContent:'center'}}>Thank You! </Link>

        </div>
            </div>
    )
}

export default Register