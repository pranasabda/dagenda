import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../../assets/icon/logo.svg';
import './mainapp.css';
import { Button, Col, Container, Row } from 'reactstrap';
import Dashboard from '../dashboard';
import { Footer, Header, SideNav } from '../../components';
import Meeting from '../meeting';
import MeetingDetail from '../meetingDetail';
import MeetingEditor from '../meetingEditor';

import { Icon, InlineIcon } from "@iconify/react";
import face from "@iconify/icons-ic/baseline-face";
import icdashboard from "@iconify/icons-ic/baseline-face";
import Taskboard from '../taskboard';
import Tasklist from '../tasklist';

function MainApp() {

  return (

    <div style={{ backgroundColor: '#E5E5E5' }}>
      <Header />
      <div style={{ display: 'flex', height: '100vh', boxSizing:'border-box' }}>
        <div>
          {/* Content dinamis dan routing yang berlapis / layered */}
          <Router>
            <div style={{ display: 'flex', flex: 1,/*  boxSizing : 'border-box', */ height: '100%', width: '100%' }}>
              <SideNav />
              <Switch>
                <Route path="/meeting">
                  <Meeting />
                </Route>
                <Route path="/create-meeting">
                  <MeetingEditor />
                </Route>
                <Route path="/meeting-detail">
                  <MeetingDetail />
                </Route>
                <Route path="/tasklist">
                  <Tasklist />
                </Route>
                <Route path="/taskboard">
                  <Taskboard />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </Router>
          {/* <Footer /> */}
          {/* <Icon icon={face} /> <p>This is some text with <InlineIcon icon={face} style={{ width: 100, height: 100 }} /></p> */}
        </div>
      </div>
    </div>

  );
}

export default MainApp;












 //Note by Prana
    //CSS TRICK : https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    //Flex Trick : https://codepen.io/danhahn/pen/QKwEXN
    //BxShadow inline style: https://stackoverflow.com/a/55467813
    //React Trello : Repo (https://github.com/rcdexta/react-trello) , 
    //Sample: https://rcdexta.github.io/react-trello/, 
    //sandbox: https://codesandbox.io/s/react-trello-example-forked-itlud?file=/src/index.js:264-273
