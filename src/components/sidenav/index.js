// How To Use State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html

import React, { useState } from 'react';
import { Nav, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Icon, InlineIcon } from "@iconify/react";
import icAssignment from "@iconify/icons-ic/baseline-assignment";
import icDashboard from "@iconify/icons-ic/round-dashboard";
import icMeeting from "@iconify/icons-ic/round-perm-contact-calendar";
import icFavorite from "@iconify/icons-ic/baseline-favorite";
import './sidenav.css';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../config';
// import { withRouter } from 'react-router-dom';

// const [collapsed, setCollapsed] = useState(true);

const SideNav = () => {

    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         date: new Date(),
    //         collapsed:true,
    //         setCollapsed:true,
    //     };
    // }

    // toggleNavbar = () => setCollapsed(!collapsed);
    // toggleNavbar(){
    // this.setState({collapsed:!collapsed});
    // }

    const history = useHistory(); // React Hooks hanya digunakan di React Function Component, tidak bisa di class component 

    return (
        <div className='side-nav'>

            {/* <p>List Based</p> */}
            <Nav vertical>
                {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" /> */}
                <NavItem >
                    <NavLink /* href="#"  */ onClick={() => history.push('/')} style={{ color: '#333333', cursor: 'pointer', marginBottom: 20, fontFamily: 'Poppins' }} >
                        {/* <Icon icon={face} />
                        <p>This is some text with <InlineIcon icon={face} style={{ width: 100, height: 100 }} /></p> */}
                        <Icon icon={icDashboard} style={{ height: 24, width: 24, marginRight: 10 }} />
                            Dashboard
                            </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink /* href="#" */ onClick={() => history.push('/meeting')} style={{ color: '#333333', cursor: 'pointer', marginBottom: 20, fontFamily: 'Poppins' }} >
                        <Icon icon={icMeeting} style={{ height: 24, width: 24, marginRight: 10 }} />
                            Meeting
                            </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink /* href="#" */ onClick={() => history.push('/tasklist')} style={{ color: '#333333', cursor: 'pointer', marginBottom: 20, fontFamily: 'Poppins' }}>
                        <Icon icon={icAssignment} style={{ height: 24, width: 24, marginRight: 10 }} />
                            Task
                            </NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem> */}
            </Nav>
            {/* <Link style={{ textDecoration: 'none', color: '#000' }} to="/meeting">Link</Link> */}

            <hr />
            <p className='signature' style={{ color: '#666666', fontSize:14 }}>Made with <Icon inline icon={icFavorite} style={{color:'red'}} /> By Prana</p>
            {/* <p>Link based</p>
                <Nav vertical>
                    <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
                </Nav> */}
        </div>
    )
}



export default SideNav
// export default withRouter(SideNav)

