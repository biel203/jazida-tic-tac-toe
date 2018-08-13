import React, { Component } from 'react';
import {toastr} from 'react-redux-toastr'

class Square extends Component {

    _handleContent() {
        const { value, index, clickSquare } = this.props;

        if (!value) {
            clickSquare(index);
        } else {
            toastr.error("Que feio!!", "Tentando passar o amiguinho pra trás!");
        }
    }

    render() {
        const { value, index, clickSquare } = this.props;

        return (
            <button className="square" onClick={this._handleContent.bind(this)}>
                {value}
            </button>
        );
    }
}

export default Square;