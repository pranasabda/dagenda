import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, CustomInput, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import './meetingEditor.css';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };

class MeetingEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    }

    onContentStateChange(contentState) {
        this.setState({
            contentState,
        });
    };



    render() {
        // const { contentState } = this.state;
        return (
            <div style={{ display: 'flex',/*  height:'100vh', */ flexDirection: 'column', margin: 40, padding: 20, backgroundColor: '#fff', borderRadius: 16, boxShadow: "0px 4px 16px  rgba(0, 0, 0, 0.1)" }}>
                <h3>Meeting Editor</h3>
                <div style={{ /* display: 'flex', */ marginTop: 20 }}>
                    <Form>
                        <FormGroup>
                            <Label >Meeting Event</Label>
                            <Input type="text" placeholder="Weekly Sprint Meeting" />
                        </FormGroup>
                        <FormGroup>
                            <Label >Invite Participant</Label>
                            <Input type="search" placeholder="nussa@mail.com, rara@mail.com, megy@mail.com, sinta@mail.com, jojo@mail.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label >PIC Event</Label>
                            <Input type="search" placeholder="nussa@mail.com" />
                        </FormGroup>
                        <Row form>
                            <Col /* md={6} */>
                                <FormGroup>
                                    <Label for="exampleCity">Start Time</Label>
                                    <Input type="time" name="city" id="exampleCity" />
                                </FormGroup>
                            </Col>
                            <Col /* md={6} */>
                                <FormGroup>
                                    <Label for="exampleCity">End Time</Label>
                                    <Input type="time" name="city" id="exampleCity" />
                                </FormGroup>
                            </Col>
                            <Col /* md={4} */>
                                <FormGroup>
                                    <Label for="exampleState">Start Date</Label>
                                    <Input type="date" name="state" id="exampleState" />
                                </FormGroup>
                            </Col>
                            <Col /* md={2} */>
                                <FormGroup>
                                    <Label for="exampleZip">End Date</Label>
                                    <Input type="date" name="zip" id="exampleZip" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col /* md={6} */>
                                <FormGroup>
                                    <Label for="exampleCity">Place</Label>
                                    <Input type="place" name="city" id="exampleCity" placeholder="Working From Home"/>
                                </FormGroup>
                            </Col>
                            <Col /* md={6} */>
                                <FormGroup>
                                    <Label for="exampleCity">Video Conference Link</Label>
                                    <Input type="place" name="city" id="exampleCity" placeholder="http://meet.com/QWEdsawe!12ER"/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div style={{ /* display: 'flex', */ height: 200, marginTop: 10, marginBottom: 10, borderRadius: 16 }}>
                    <Label>Agenda Description</Label>
                    <Editor
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                    //  onContentStateChange={this.onContentStateChange()}
                    />
                    <div style={{ /* display: 'flex', */ marginTop: 10 }}>
                        <Form>
                            <FormGroup>
                                <Label for="exampleCustomFileBrowser">File Attactments</Label>
                                <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />
                            </FormGroup>
                            {/* <Button>Upload</Button> */}
                        </Form>
                    </div>
                    <Link to='./meeting-detail'>
                        <Button color="success" style={{ float: 'right', marginTop: 20 }}>Save Event</Button>
                    </Link>
                </div>

            </div>

        );
    }
}

export default MeetingEditor