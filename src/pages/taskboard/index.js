import React from 'react';
import './taskboard.css';
import { Link, useHistory } from 'react-router-dom';
import Board from 'react-trello';



function Taskboard() {

    const history = useHistory()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, marginLeft: 40 }}>
            <h3 style={{ fontFamily: 'Poppins' }}>Tasklist Board</h3>
            <Board tagStyle={{ fontSize: '80%' }} data={data} draggable style={{ backgroundColor: '#E5E5E5', marginTop:10 }} />
        </div>
    );
}

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'To-do',
            label: '2/2',
            style: { backgroundColor: '#f9f9f9' },
            cards: [
                {
                    id: 'Card1',
                    title: 'User Research',
                    name: 'Prana',
                    dueOn: 'due in a day',
                    description: 'User Research, Gathering user data & user requirment (@rara)',
                    label: 'Due Date 21/12/2020',
                    draggable: true,
                },
                {
                    id: 'Card2',
                    title: 'Redesign App',
                    name: 'Prana',
                    description: 'Redesign Application for better UX (@nussa)',
                    label: 'Due Date 21/12/2020',
                    draggable: true,
                },
            ]
        },
        {
            id: 'lane2',
            title: 'In Progress',
            label: '0/0',
            style: { backgroundColor: '#f9f9f9' },
            cards: [
                {
                    id: 'Card3',
                    title: 'QA Test',
                    name: 'Prana',
                    dueOn: 'due in a day',
                    description: 'QA using blackbox method (@Shinta)',
                    label: '30 mins',
                    draggable: true,
                    tag: [{ title: 'Critical', color: 'white', bgcolor: 'red' }, { title: '2d ETA', color: 'white', bgcolor: '#0079BF' }]
                },
            ]
        },
        {
            id: 'lane3',
            title: 'Completed',
            label: '0/0',
            style: { backgroundColor: '#f9f9f9' },
            cards: [
                {
                    id: 'Card4',
                    title: 'QA Test',
                    name: 'Prana',
                    dueOn: 'due in a day',
                    description: 'QA Testing on Mobile App (@Nussa)',
                    label: '30 mins',
                    draggable: true,
                    tag: [{ title: 'Critical', color: 'white', bgcolor: 'red' }, { title: '2d ETA', color: 'white', bgcolor: '#0079BF' }]
                },
                { 
                    id: 'Card5', 
                    title: 'Web Deployment', 
                    description: 'Web Deployment for launching new version app (@jojo)', 
                    label: '5 mins', 
                    metadata: { sha: 'be312a1' } 
                }
            ]
        },
        {
            id: 'lane4',
            title: 'On Hold',
            label: '0/0',
            style: { backgroundColor: '#f9f9f9' },
            cards: []
        }
    ]
}





export default Taskboard




// Note Prana 
// With CustomsCard code : https://github.com/rcdexta/react-trello/blob/master/stories/CustomCard.story.js#L103
