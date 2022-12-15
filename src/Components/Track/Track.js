import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
    }
    renderAction () {
        if (this.props.isRemoval === false) {
            return '+'
        } else {
            return '-'
        };
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3></h3>
                    <p></p>
                </div>
                <button className="Track-action">{this.renderAction()}</button>
            </div>
        );
    }
};

export default Track;