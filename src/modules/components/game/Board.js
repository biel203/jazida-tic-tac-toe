import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { playerTurn, squares, _onClickSquare } = this.props;

        const status = `Jogador da vez: ${playerTurn.name} - ${playerTurn.symbol}`;

        return (
            <div>
                <div className="status">{status}</div>

                <div className="board-width" >
                    {squares.map((item, index) => {
                        return (
                            <div key={index}>
                                <Square index={index} value={squares[index]} clickSquare={_onClickSquare}/>
                            </div>
                        )

                    })}
                </div>

            </div>
        );
    }
}

export default Board;