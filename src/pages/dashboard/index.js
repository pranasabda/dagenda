import React from 'react';
import { Card, Table, Button, ButtonGroup, ButtonToolbar, Badge, Form, FormGroup, Input, Label, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { DagendaLogo } from '../../assets';
import { Calendar } from '../../components';
import './dashboard.css';
import { Icon, InlineIcon } from "@iconify/react";
import icAssignment from "@iconify/icons-ic/baseline-assignment";
import icDashboard from "@iconify/icons-ic/round-dashboard";
import icMeeting from "@iconify/icons-ic/round-perm-contact-calendar";
import { Link, useHistory } from 'react-router-dom';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {


    return (
      <div style={{ display: 'flex', marginTop: 40, marginLeft: 40, flexDirection: 'column' }}>

        <div style={{ display: 'flex', flexDirection: 'row' }}>

          <Link to='/meeting-detail' style={{ textDecoration: 'none' }}>
            <Card style={{ display: 'flex', flexDirection: 'row', height: 200, width: 500, borderRadius: 16, boxShadow: "0px 4px 16px  rgba(0, 0, 0, 0.1)" }} > {/* onClick={() => this.clickCard()} */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: 120, background: '#FF6F1E', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}>
                <Icon icon={icMeeting} style={{ height: 100, width: 100, color: '#fff' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: 20, marginLeft: 20, marginTop: 20 }}>
                <p className='cardtitle'>Today Meeting</p>
                <p style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}>Weekly Sprint Meeting</p>
                <p style={{ fontFamily: 'Poppins', color: "#666666" }}>09.00 AM - 10.00 AM</p>
                <p style={{ fontFamily: 'Poppins', color: "#666666" }}>Telkom GMP - Sangkuriang Room </p>
              </div>
            </Card>
          </Link>

          <Link to='/tasklist' style={{ textDecoration: 'none' }}>
            {/* <Card className="widgetFrame" >
            <div style={{ width: 120, left: 0, top: 0, background: '#7B61FF', justifyContent: 'center', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}> */}
            <Card style={{ display: 'flex', flexDirection: 'row', height: 200, width: 500, borderRadius: 16, marginLeft: 40, boxShadow: "0px 4px 16px  rgba(0, 0, 0, 0.1)" }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 120, background: '#7B61FF', borderTopLeftRadius: 16, borderBottomLeftRadius: 16, justifySelf: 'ceter' }}>
                {/* <img src={DagendaLogo} /> */}
                <Icon icon={icAssignment} style={{ height: 80, width: 80, color: '#fff' }} />
              </div>
              <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginRight: 20, marginLeft: 20, marginTop: 20 }}>
                <p className='cardtitle'>Task Progress</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Badge color="primary" style={{ height: 20 }}>To-do</Badge>
                  {/* <p style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}>To-do </p> */}
                  <p style={{ fontWeight: 'bold', marginRight: 40 }}>4</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Badge color="warning" style={{ height: 20 }}>In Progress</Badge>
                  {/* <p style={{ fontFamily: 'Poppins', color: "#666666" }}>In Progress</p> */}
                  <p style={{ fontWeight: 'bold', marginRight: 40 }}>15</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Badge color="success" style={{ height: 20 }}>Done</Badge>
                  {/* <p style={{ fontFamily: 'Poppins', color: "#666666" }}>Done </p> */}
                  <p style={{ fontWeight: 'bold', marginRight: 40 }}>20</p>
                </div>
              </div>
            </Card>
          </Link>

          {/* <Card className="widgetFrame"> */}
          {/* <img style={{ alignItems: 'center' }} src={DagendaLogo} /> */}
          {/* boderRadius inline style: https://stackoverflow.com/a/51076874 */}
          {/* <Card style={{ display: 'flex', flexDirection: 'row', height: 200, width: 500, borderRadius: 16, marginLeft: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 120, background: '#FF6F1E', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}> 
              <Icon icon={icMeeting} style={{ height: 100, width: 100, color: '#fff' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: 20, marginLeft: 20, marginTop: 20 }}>
              <p className='cardtitle'>Notes Meeting</p>
              <p style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: "#666666" }}>BoD Weekly Meeting</p>
              <p style={{ fontFamily: 'Poppins', color: "#666666" }}>10.00 AM - 11.30 AM</p>
              <p style={{ fontFamily: 'Poppins', color: "#666666" }}>Telkom GMP - Sangkuriang Room </p>
            </div>
          </Card> */}

        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 40 }} >
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="search" name="search" placeholder="Search Task" />
            </FormGroup>
            <Button color='primary'>Search</Button>
          </Form>
          <Form inline>
            <FormGroup>
              <Label for="exampleDate" style={{ margin: 10 }}>From : </Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="from"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate" style={{ margin: 10 }}>To : </Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="from"
              />
            </FormGroup>
          </Form>
        </div>
        <div style={{ display: 'flex', marginTop: 20, backgroundColor: '#fff', borderRadius: 16, boxShadow: "0px 4px 16px  rgba(0, 0, 0, 0.1)" }}>
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
        <div style={{ /* width: '140%', */ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>

          <Pagination aria-label="Page navigation example">
            <PaginationItem disabled>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem active>
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
              <PaginationLink href="#">
                4
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                5
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
      </div >
    );
  }
}

export default Dashboard


// Notes By Prana 
// How To Use State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html