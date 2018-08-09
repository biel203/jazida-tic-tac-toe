import React, { Component } from 'react';
import BoardContainer from '../../containers/game/BoardContainer';
import NameBox from '../NameBox';

import { PLAYER_ONE, PLAYER_TWO } from '../../../constants'

class Game extends Component {

    componentWillReceiveProps({ gameHasStarted, players, startGame }) {
        if (!gameHasStarted) {
            if (players.playerOne.name && players.playerTwo.name) {
                startGame(players.playerOne);
            }
        }
    }

    _handleChangePlayerName(player, name) {
        const { onChangePlayerName } = this.props;
        onChangePlayerName({
            player,
            name
        })
    }

    render() {
        const { players, playerTurn, gameHasStarted } = this.props;
        return (
            <div className="game">
                <div className="player-one-container">
                    <h3>Player One</h3>

                    <div className="left-name-textbox">
                        {!players.playerOne.name ?
                            <NameBox onChangeName={this._handleChangePlayerName.bind(this, PLAYER_ONE)}/>
                            :
                            <h4>{players.playerOne.name}</h4>
                        }
                    </div>

                </div>

                <div className="player-two-container">
                    <h3>Player Two</h3>

                    <div className="right-name-textbox">

                        {!players.playerTwo.name ?
                            <NameBox onChangeName={this._handleChangePlayerName.bind(this, PLAYER_TWO)}/>
                            :
                            <h4>{players.playerTwo.name}</h4>
                        }
                    </div>
                </div>

                <div className="game-board">
                    {gameHasStarted ?
                        <BoardContainer playerTurn={ playerTurn } symbol={ players[playerTurn].symbol }/>
                        :
                        <div className="initial-text-center" >
                            <h2>Welcome!!</h2>
                            <h1>Tic-Tac-Toe</h1>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Game;