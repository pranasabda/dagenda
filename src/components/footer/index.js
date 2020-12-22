import React from 'react';
import {Link} from 'reactstrap';

class footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

    render() {
        return(
            <div>Footer</div>
        )
    }
}

export default footer