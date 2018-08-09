import { connect } from 'react-redux';
import GameComponent from '../../components/game/Game';

const mapStateToProps = state => ({
    players: state.gameState.players,
    playerTurn: state.gameState.playerTurn,
});

const mapDispatchToProps = dispatch => ({});

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameComponent);

export default GameContainer;