import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button, NavLink, Row, Table, ButtonGroup, ButtonToolbar, Form, FormGroup, Input, Label, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function Meeting() {

    const history = useHistory()
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, marginLeft: 40 }}>

            <h3 style={{ fontFamily: 'Poppins' }}>Meeting list</h3>

            <div style={{ display: 'flex', width: '140%', justifyContent: 'space-between', marginBottom: 20, marginTop: 20 }}>
                {/* <Button color="primary">Add Meeting</Button> */}
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        {/* <Label for="examplePassword" className="mr-sm-2">Search Task</Label> */}
                        <Input type="search" name="search" placeholder="Search Task" />
                    </FormGroup>
                    <Button color='primary'>Search</Button>
                    {/* <FormGroup>
                        <Label for="exampleDate">From</Label>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="from"
                        />
                    </FormGroup> */}
                </Form>
                <Button color="success" onClick={() => history.push('/create-meeting')}>Add Meeting</Button>
            </div>
            <div style={{ display: 'flex', backgroundColor: '#fff', borderRadius: 16, boxShadow: "0px 4px 16px  rgba(0, 0, 0, 0.1)", width: '140%' }}>
                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Meeting Agenda</th>
                            <th>Place</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Monday, 21 Dec 2020</th>
                            <td>09.00 AM - 10.00 AM</td>
                            <td><Link to='./meeting-detail'>Weekly Sprint Meeting</Link></td>
                            <td>Telkom GMP</td>
                        </tr>
                        <tr>
                            <th scope="row">Monday, 21 Dec 2020</th>
                            <td>13.00 AM - 14.00 AM</td>
                            <td><Link to='./meeting-detail'>Sync Meeting w/ Engineer</Link></td>
                            <td>Telkom GMP</td>
                        </tr>
                        <tr>
                            <th scope="row">Tuesday, 22 Dec 2020</th>
                            <td>09.00 AM - 10.00 AM</td>
                            <td><Link to='./meeting-detail'>Daily Meeting</Link></td>
                            <td>Telkom Landmark Tower</td>
                        </tr>
                        <tr>
                            <th scope="row">Wednesday, 23 Dec 2020</th>
                            <td>09.00 AM - 10.00 AM</td>
                            <td><Link to='./meeting-detail'>Daily Meeting</Link></td>
                            <td>Telkom Landmark Tower</td>
                        </tr>
                        <tr>
                            <th scope="row">Friday, 25 Dec 2020</th>
                            <td>15.00 AM - 17.00 AM</td>
                            <td><Link to='./meeting-detail'>Retrospective Meeting</Link></td>
                            <td>Telkom Landmark Tower</td>
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

            {/* <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, backgroundColor: '#fff' }}>
                <p>Meeting Table</p>
                <NavLink onClick={() => history.push('/')}>Link</NavLink>
                <NavLink onClick={() => history.push('/meeting-detail')}>Link Meeting Detail</NavLink>
                <NavLink onClick={() => history.push('/taskboard')}>Link Taskboard</NavLink>
            </div> */}

        </div>

    );
}

export default Meeting