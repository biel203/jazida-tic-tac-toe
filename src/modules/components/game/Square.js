import React, { Component } from 'react';

class Square extends Component {
    render() {
        const { value, index, clickSquare } = this.props;

        return (
            <button className="square" onClick={() => clickSquare(index)}>
                {value}
            </button>
        );
    }
}

export default Square;