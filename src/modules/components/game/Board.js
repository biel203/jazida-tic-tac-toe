import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {

    constructor(props) {
        super(props)
    }

    _handleClickSquare(index) {
        const { symbol, _onClickSquare } = this.props;
        _onClickSquare({
            index,
            symbol
        })
    }

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

    hasWinner(info) {
        console.log(info)
    }

    render() {
        const { symbol, playerTurn, squares } = this.props;

        const status = `Jogador da vez: ${playerTurn} - ${symbol}`;

        if (this._verifyWinner(squares)) {
            this.hasWinner.call(this, playerTurn)
        }

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