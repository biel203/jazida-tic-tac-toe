import { connect } from 'react-redux';
import GameComponent from '../../components/game/Game';

import { changePlayerName } from '../../../actions'

const mapStateToProps = state => ({
    players: state.gameState.players,
    playerTurn: state.gameState.playerTurn,
});

const mapDispatchToProps = dispatch => ({
    onChangePlayerName: value => dispatch(changePlayerName(value))
});

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameComponent);

export default GameContainer;