import React from 'react';
import { NavLink, Table, Button, ButtonGroup, ButtonToolbar, Badge, Form, FormGroup, Label, Input, PaginationLink, Pagination, PaginationItem } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';



function Tasklist() {

    const history = useHistory()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, marginLeft: 40 }}>
            <div style={{display:'flex', justifyContent:'space-between', width:'140%', marginBottom:20}}>
            <h3 style={{ fontFamily: 'Poppins' }}>Tasklist</h3>
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="search" name="search" placeholder="Search Task" />
                </FormGroup>
                <Button color='primary'>Search</Button>
            </Form>
            </div>
            <div style={{ display: 'flex', backgroundColor: '#fff', borderRadius: 16, boxShadow: "0px 4px 16px  rgba(0, 0, 0, 0.1)", width: '140%' }}>
                <Table>
                    <thead>
                        <tr>
                            <th>Task ID</th>
                            <th>Task</th>
                            <th>Meeting Agenda</th>
                            <th>Assigned</th>
                            <th>Status</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Task #301</th>
                            <td><Link to='./taskboard'>User Research</Link></td>
                            <td><Link to='/meeting-detail' style={{textDecoration: 'none'}}>Weekly Sprint Meeting</Link></td>
                            <td>Rara</td>
                            <td>
                                <Badge color="primary">To-do</Badge>
                            </td>
                            <td>22 Des 2020</td>
                        </tr>
                        <tr>
                            <th scope="row">Task #302</th>
                            <td><Link to='./taskboard'>Redesign App</Link></td>
                            <td><Link to='/meeting-detail' style={{textDecoration: 'none'}}>Weekly Sprint Meeting</Link></td>
                            <td>Nussa</td>
                            <td>
                                <Badge color="warning">In Progress</Badge>
                            </td>
                            <td>22 Des 2020</td>
                        </tr>
                        <tr>
                            <th scope="row">Task #303</th>
                            <td><Link to='./taskboard'>QA Test</Link></td>
                            <td><Link to='/meeting-detail' style={{textDecoration: 'none'}}>Weekly Sprint Meeting</Link></td>
                            <td>Shinta</td>
                            <td>
                                <Badge color="warning">In Progress</Badge>
                            </td>
                            <td>23 Des 2020</td>
                        </tr>
                        <tr>
                            <th scope="row">Task #304</th>
                            <td><Link to='./taskboard'>Update Design System</Link></td>
                            <td><Link to='/meeting-detail' style={{textDecoration: 'none'}}>Daily Meeting</Link></td>
                            <td>Shandika</td>
                            <td>
                                <Badge color="success">Done</Badge>
                            </td>
                            <td>23 Des 2020</td>
                        </tr>
                        <tr>
                            <th scope="row">Task #305</th>
                            <td><Link to='./taskboard'>Web Deployment</Link></td>
                            <td><Link to='/meeting-detail' style={{textDecoration: 'none'}}>Daily Meeting</Link></td>
                            <td>Susan</td>
                            <td>
                                <Badge color="success">Done</Badge>
                            </td>
                            <td>24 Des 2020</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div style={{ width: '140%', display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
            <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            1
                </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last href="#" />
                    </PaginationItem>
                </Pagination>
            </div>

            {/* <p>Meeting Table</p>
              <NavLink onClick={ () => history.push('/')}>Link</NavLink>
              <NavLink onClick={ () => history.push('/meeting')}>Meeting Link</NavLink>
              <NavLink onClick={ () => history.push('/meeting-detail')}> Meeting DetailLink</NavLink>
              <NavLink onClick={ () => history.push('/taskboard')}>Link Taskboard</NavLink> */}
        </div >
    );
}


export default Tasklist