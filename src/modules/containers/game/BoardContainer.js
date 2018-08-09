import { connect } from 'react-redux';
import BoardComponent from '../../components/game/Board';

import { squareArrayChange } from '../../../actions'

const mapStateToProps = state => ({
    squares: state.boardState.squares
});

const mapDispatchToProps = dispatch => ({
    _onClickSquare: value => dispatch(squareArrayChange(value))
});

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardComponent);

export default BoardContainer;