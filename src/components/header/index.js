// Create from tutor No.9 --> https://youtu.be/sbVE0CFyPxY

import Icon from '@iconify/react';
import React, { useEffect, useState } from 'react';
import {
    Col, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { AvatarPhoto, DagendaLogo, NotifTag } from '../../assets';
import './header.css';
import icAction from "@iconify/icons-ic/baseline-more-vert";
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        // Component - Molecules Header (By Prana)
        <div>
            <Navbar className='header' expand="md">
                <NavbarBrand href="/" style={{ fontWeight: 'bold', paddingLeft: 20 }}>
                    <img src={DagendaLogo} style={{ height: 36, width: 140 }} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    </Nav>
                    <NavbarText style={{ marginRight: 40 }}>
                        <UncontrolledDropdown setActiveFromChild>
                            <DropdownToggle tag="a" className="nav-link">
                                <img src={NotifTag} style={{ height: 30, width: 30, marginRight: 20 }} />
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem header>Recently</DropdownItem>
                                <DropdownItem>Admin @Metion you in Task</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Admin @Metion you in Meeting</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Task #301, Status(Done)</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Task #299, Status(Done)</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </NavbarText>
                    <NavbarText style={{ marginRight: 40, fontFamily: 'Poppins' }}>
                        <img src={AvatarPhoto} style={{ height: 40, width: 40, marginRight: 20, }} />
                        John Thor
                        </NavbarText>
                    <NavbarText style={{ marginRight: 20 }}>
                        <UncontrolledDropdown setActiveFromChild >
                            <DropdownToggle tag="a" className="nav-link">
                                <Icon icon={icAction} style={{ height: 24, width: 24 }} />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Setting</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => history.push('/login')}>Logout</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header