import { Icon, InlineIcon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, CardFooter, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';
import './meetingDetail.css';
import icEdit from "@iconify/icons-ic/baseline-edit";
import icPlace from "@iconify/icons-ic/baseline-place";
import icEvent from "@iconify/icons-ic/baseline-event";
import icAttach from "@iconify/icons-ic/baseline-attach-file";
import icPeople from "@iconify/icons-ic/baseline-people";
import icPlus from "@iconify/icons-ic/baseline-plus";
import icNoteAdd from "@iconify/icons-ic/baseline-note-add";
import icAssignment from "@iconify/icons-ic/baseline-assignment";
import icDashboard from "@iconify/icons-ic/round-dashboard";
import icMeeting from "@iconify/icons-ic/round-perm-contact-calendar";
import { useState } from 'react';

class MeetingDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            modalTask: false,
            modalNote: false,
        };

        this.toggleTask = this.toggleTask.bind(this)
        this.toggleNote = this.toggleNote.bind(this)
    }

    toggleTask() {
        this.setState({
            modalTask: !this.state.modalTask
        })
    }

    toggleNote() {
        this.setState({
            modalNote: !this.state.modalNote
        })
    }

    render() {


        return (
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, marginLeft: 40, }}> {/* , */}

                <h3 style={{ fontFamily: 'Poppins' }}>Meeting Detail</h3>
                <div style={{ display: 'flex', flexDirection: 'row' }}>

                    <div style={{ /* display: 'flex', */ /* width: '100vh', */ backgroundColor: '#fff', marginTop: 20, padding: 20, borderRadius: 16, boxShadow: "0px 4px 16px  rgba(0, 0, 0, 0.1)" }}>
                        <Row>
                            <Col>
                                <h4 style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}>Weekly Sprint Meeting</h4>
                                <hr />
                                <p style={{ fontSize: 12, color: '#999999' }}>Created By John Thor ( 18 Dec 2020 )</p>

                                <h5 style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}>Agenda Description</h5>
                                <Card style={{ padding: 10 }}>
                                    <p>Weekly Sprint Meeting</p>
                                    <p>
                                        <p>1. Goal of the Sprint (10 min)</p>
                                        <ul>
                                            <li>
                                                Goals to Achive with sprint increment
                                        </li>
                                        </ul>
                                        <p>2. Task Breakdown and Estimations (30 min)</p>
                                        <ul>
                                            <li>
                                                Break down of requirement into subtask (max 1 day duration) according to Definition of Done
                                        </li>
                                            <li>
                                                Estimation of subtask
                                        </li>
                                            <li>
                                                Assignment of tasks to team members (optional)
                                        </li>
                                        </ul>
                                        <p>3. Sprint Capacity Calculation (10 m)</p>
                                        <ul>
                                            <li>
                                                Calculation of the capacity of individual team members
                                        </li>
                                            <li>
                                                Update of sprint scope based on the capacity
                                        </li>
                                        </ul>
                                        <p>4. Board Preparation (10 m)</p>
                                        <ul>
                                            <li>
                                                Evidence of created task into an electronic tools
                                        </li>
                                        </ul>
                                    </p>
                                </Card>
                            </Col>
                            <Col>
                                <Link style={{ float: 'right' }} to='/create-meeting'> <InlineIcon icon={icEdit} /> Edit</Link>
                                <h5 style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}><InlineIcon icon={icEvent} style={{ marginRight: 10 }} />Date and Time</h5>
                                <p>Monday, 21 December 2020</p>
                                <p>09.00 AM - 10.00 AM WIB</p>
                                <hr />
                                <h5 style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}><InlineIcon icon={icPlace} style={{ marginRight: 10 }} />Place</h5>
                                <p>Telkom GMP - Sangkuriang Room / WFH</p>
                                <p>Link :<Link>http://meet.com/QWEdsawe!12ER</Link></p>
                                <hr />
                                <h5 style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}><InlineIcon icon={icPeople} style={{ marginRight: 10 }} />Participant</h5>
                                <p>PIC : John Thor</p>
                                <ul>
                                    <li>Nussa (<Link>nusa@mail.com</Link>)</li>
                                    <li>Rara (<Link>rara@mail.com</Link>)</li>
                                    <li>Shinta (<Link>shinta@mail.com</Link>)</li>
                                    <li>Jojo (<Link>jojo@mail.com</Link>)</li>
                                    <Link>+ Invite more</Link>
                                </ul>
                                <hr />
                                <h5 style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}><InlineIcon icon={icAttach} style={{ marginRight: 10 }} />Attactments</h5>
                                <ul>
                                    <li><Link>Sprint docs.docs</Link></li>
                                    <li><Link>PRD.xlxs</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>

                    <div style={{ /* display: 'flex', */ width: 240, backgroundColor: '#fff', marginLeft: 20, marginTop: 20, padding: 20, borderRadius: 16, boxShadow: "0px 4px 16px  rgba(0, 0, 0, 0.1)" }}>
                        <h5 style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}>Tasklist <Link style={{ float: 'right' }} onClick={this.toggleTask}> <InlineIcon icon={icPlus} /> Add</Link></h5>
                        <Link to='/taskboard' style={{textDecoration: 'none'}}>
                            <Card style={{ padding: 5, marginBottom: 10 }}>
                                <p style={{ fontSize: 14, color: '#999999', float: 'right' }}> Due 21 Des 2020</p>
                                <CardTitle>User Research</CardTitle>
                                <Badge color="primary" style={{ height: 20 }}>To-do</Badge>
                                <hr />
                                <CardText style={{ fontSize: 14, color: '#999999' }}>
                                    Assigned @rara
                            </CardText>
                            </Card>
                        </Link>
                        <Link to='/taskboard' style={{textDecoration: 'none'}}>
                            <Card style={{ padding: 5, marginBottom: 10 }}>
                                <p style={{ fontSize: 14, color: '#999999', float: 'right' }}> Due 21 Des 2020</p>
                                <CardTitle>Redesign App</CardTitle>
                                <Badge color="primary" style={{ height: 20 }}>To-do</Badge>
                                <hr />
                                <CardText style={{ fontSize: 14, color: '#999999' }}>
                                    Assigned @nussa
                            </CardText>
                            </Card>
                        </Link>
                        <Link to='/taskboard' style={{textDecoration: 'none'}}>
                            <Card style={{ padding: 5, marginBottom: 10 }}>
                                <p style={{ fontSize: 14, color: '#999999', float: 'right' }}> Due 21 Des 2020</p>
                                <CardTitle>QA Test</CardTitle>
                                <Badge color="warning" style={{ height: 20 }}>In Progress</Badge>
                                <hr />
                                <CardText style={{ fontSize: 14, color: '#999999' }}>
                                    Assigned @Shinta
                            </CardText>
                            </Card>
                        </Link>

                    </div>
                </div>

                <div style={{ /* display: 'flex', */ /* width: '100vh', */ backgroundColor: '#fff', marginTop: 20, padding: 20, borderRadius: 16, boxShadow: "0px 4px 16px  rgba(0, 0, 0, 0.1)" }}>
                    <h5 style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}>Meeting Note <Link style={{ float: 'right' }} onClick={this.toggleNote}> <InlineIcon icon={icNoteAdd} /> Add Note</Link></h5>
                    <hr />
                    <p style={{ fontSize: 14, color: '#999999' }}>Created By Rara (21 Dec 2020) <Link style={{ float: 'right' }} onClick={this.toggleNote}><InlineIcon icon={icEdit} /> Edit</Link></p>
                    <Card style={{ padding: 10 }}>
                        <CardTitle>MoM</CardTitle>
                        <p>1. Prepare Backlog Sprint Team for Next Week</p>
                        <p>2. Update PRD</p>
                    </Card>
                </div>

                {/* ------------- Modal Task ------------------------- */}
                <Modal isOpen={this.state.modalTask} toggle={this.toggleTask}>
                    <ModalHeader toggle={this.toggleTask}>Add Task</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="idNameInput">Task Title:</Label>
                                <Input type="text" name="nameInput" id="idNameInput" placeholder="User Research" /* onChange={this.handleChange} */ />
                            </FormGroup>
                            <FormGroup>
                                <Label for="idNameInput">Due:</Label>
                                <Input type='date' name="nameInput" id="idNameInput" placeholder="21/12/2020" /* onChange={this.handleChange} */ />
                            </FormGroup>
                            <FormGroup>
                                <Label for="idNameInput">Description:</Label>
                                <Input type="textarea" name="nameInput" id="idNameInput" placeholder="Description" /* onChange={this.handleChange} */ />
                            </FormGroup>
                            <FormGroup>
                                <Label for="idNameInput">Assign To:</Label>
                                <Input type="search" name="nameInput" id="idNameInput" placeholder="@rani" /* onChange={this.handleChange} */ />
                            </FormGroup>
                            <FormGroup>
                                <Label for="idNameInput">Status:</Label>
                                <Input type='select' name="nameInput" id="idNameInput" placeholder="@rani" /* onChange={this.handleChange} */ >
                                    <option>To-do</option>
                                    <option>In Progress</option>
                                    <option>Done</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggleTask}>Done</Button>
                    </ModalFooter>
                </Modal>

                 {/* ------------- Modal Note ------------------------- */}
                 <Modal isOpen={this.state.modalNote} toggle={this.toggleNote}>
                    <ModalHeader toggle={this.toggleNote}>Meeting Note</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="idNameInput">Note Title:</Label>
                                <Input type="text" name="nameInput" id="idNameInput" placeholder="MoM" /* onChange={this.handleChange} */ />
                            </FormGroup>
                            <FormGroup>
                                <Label for="idNameInput">Description:</Label>
                                <Input type="textarea" name="nameInput" id="idNameInput" placeholder="Prepare Product Requirement Document" /* onChange={this.handleChange} */ />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggleNote}>Done</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}

export default MeetingDetail