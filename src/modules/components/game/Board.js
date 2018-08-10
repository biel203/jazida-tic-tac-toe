import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {

    constructor(props) {
        super(props)
    }

    componentWillReceiveProps({ squares, hasAWinner, hasDraw, resetGame }) {
        let winner = this._verifyWinner.call(this, squares);
        if (winner) {
            hasAWinner(winner);
            setTimeout(() => {
                resetGame()
            }, 500)
        } else {
            if (this._verifyDraw.call(this, squares)) {
                hasDraw();
                setTimeout(() => {
                    resetGame()
                }, 500)
            }
        }
    }

    _verifyDraw(squares) {
        let hasDraw = true;

        for (var i = 0; i < squares.length; i++) {
            if (!squares[i]) {
                hasDraw = false;
                break;
            }
        }
        return hasDraw;
    };

    _verifyWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    _handleClickSquare(index) {
        const { symbol, _onClickSquare } = this.props;
        _onClickSquare({
            index,
            symbol
        })
    }


    render() {
        const { symbol, playerTurn, squares } = this.props;

        const status = `Jogador da vez: ${playerTurn} - ${symbol}`;

        return (
            <div>
                <div className={playerTurn ? "status" : "initial-text-center"}>{status}</div>

                <div className="board-width" >
                    {squares.map((item, index) => {
                        return (
                            <div key={index}>
                                <Square index={index}
                                        value={squares[index]}
                                        clickSquare={this._handleClickSquare.bind(this)}/>
                            </div>
                        )

                    })}
                </div>

            </div>
        );
    }
}

export default Board;