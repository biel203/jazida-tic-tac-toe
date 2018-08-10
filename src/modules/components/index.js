import React, { Component } from 'react';
import GameContainer from '../containers/game/GameContainer';
import ReduxToastr from 'react-redux-toastr';


class InitialContainer extends Component {
    render() {
        return (
            <div>
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-left"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick/>

                <GameContainer />
            </div>
        );
    }
}

export default InitialContainer;
