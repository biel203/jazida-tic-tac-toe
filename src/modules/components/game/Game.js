import React, { Component } from 'react';
import BoardContainer from '../../containers/game/BoardContainer';
import NameBox from '../NameBox';
import {toastr} from 'react-redux-toastr'

import { PLAYER_ONE, PLAYER_TWO } from '../../../constants'

class Game extends Component {

    container = null;

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
        const { players, playerTurn, gameHasStarted, resetGame, hasDraw, winner } = this.props;

        if (hasDraw) {
            toastr.info("Puts!! Deu Velha!");
        }

        if (Object.keys(winner).length) {
            toastr.success("TEMOS UM GANHADOR!!", `${winner.name} GANHOU`)
        }

        return (
            <div className="game">

                <div className="player-one-container">
                    <h3>Player One</h3>

                    <div className="left-name-textbox">
                        {!players.playerOne.name ?
                            <NameBox onChangeName={this._handleChangePlayerName.bind(this, PLAYER_ONE)}/>
                            :
                            <div>
                                <h4>{players.playerOne.name}</h4>
                                <p>{players.playerOne.score}</p>
                            </div>
                        }
                    </div>

                </div>

                <div className="center-message">
                    {}
                </div>

                <div className="player-two-container">
                    <h3>Player Two</h3>

                    <div className="right-name-textbox">

                        {!players.playerTwo.name ?
                            <NameBox onChangeName={this._handleChangePlayerName.bind(this, PLAYER_TWO)}/>
                            :
                            <div>
                                <h4>{players.playerTwo.name}</h4>
                                <p>{players.playerTwo.score}</p>
                            </div>
                        }
                    </div>
                </div>

                <div>

                </div>

                <div className="game-board">
                    {gameHasStarted ?

                        <div>
                            <BoardContainer playerTurn={ playerTurn } symbol={ players[playerTurn].symbol }/>

                            <button className={"reset-button"} onClick={() => resetGame()}>
                                Resetar
                            </button>
                        </div>
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