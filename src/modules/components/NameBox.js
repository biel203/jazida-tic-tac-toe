import React, { Component } from 'react';

class NameBoxComponent extends Component {

    state = {
        name: ""
    };

    _onInputChange(evt) {
        evt.preventDefault();

        this.setState({name: evt.target.value})
    }

    _handleSubmit(evt, name) {
        evt.preventDefault();
        const { onChangeName } = this.props;
        onChangeName(name);
    };

    render() {
        return (
            <form>
                <label>
                    Player:
                    <input
                        value={this.state.name}
                        type="text"
                        name="name"
                        onChange={this._onInputChange.bind(this)}
                    />
                </label>
                <input type="submit" value="Submit" onClick={this._handleSubmit.bind(this, this.state.name)}/>
            </form>
        );
    }
}

export default NameBoxComponent;
