import React, { Component } from 'react';
import BoardContainer from '../../containers/game/BoardContainer';

class Game extends Component {
    render() {
        const { players, playerTurn } = this.props;
        return (
            <div className="game">
                <div className="player-one-container">
                    {players.playerOne.name}
                </div>

                <div className="player-two-container">
                    {players.playerTwo.name}
                </div>

                <div className="game-board">
                    <BoardContainer playerTurn={ playerTurn }/>
                </div>
            </div>
        );
    }
}

export default Game;