import { connect } from 'react-redux';
import BoardComponent from '../../components/game/Board';

import { squareArrayChange, hasAWinner, hasDraw, resetGame } from '../../../actions'

const mapStateToProps = state => ({
    squares: state.boardState.squares,

});

const mapDispatchToProps = dispatch => ({
    _onClickSquare: value => dispatch(squareArrayChange(value)),
    hasAWinner: value => dispatch(hasAWinner(value)),
    hasDraw: value => dispatch(hasDraw(value)),
    resetGame: () => dispatch(resetGame()),

});

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardComponent);

export default BoardContainer;