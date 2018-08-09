import React, { Component } from 'react';
import BoardContainer from '../../containers/game/BoardContainer';
import NameBox from '../NameBox';

class Game extends Component {
    render() {
        const { players, playerTurn } = this.props;
        return (
            <div className="game">
                <div className="player-one-container">
                    <h3>Player One</h3>

                    {!players.playerOne.name &&
                    <div className="left-name-textbox">
                        <NameBox />
                    </div>
                    }
                </div>

                <div className="player-two-container">
                    <h3>Player Two</h3>

                    {!players.playerTwo.name &&
                    <div className="right-name-textbox">
                        <NameBox />
                    </div>
                    }
                </div>


                <div className="game-board">
                    <BoardContainer playerTurn={ playerTurn }/>
                </div>
            </div>
        );
    }
}

export default Game;