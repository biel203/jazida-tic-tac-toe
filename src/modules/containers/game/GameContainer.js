import { connect } from 'react-redux';
import GameComponent from '../../components/game/Game';

import { changePlayerName, startGame } from '../../../actions'

const mapStateToProps = state => ({
    players: state.gameState.players,
    playerTurn: state.gameState.playerTurn,
    gameHasStarted: state.gameState.gameHasStarted
});

const mapDispatchToProps = dispatch => ({
    onChangePlayerName: value => dispatch(changePlayerName(value)),
    startGame: value => dispatch(startGame(value))
});

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameComponent);

export default GameContainer;