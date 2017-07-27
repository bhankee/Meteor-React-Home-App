import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Players } from './../api/players';
import Player from './/Player';
import FlipMove from 'react-flip-move';

class PlayerList extends React.Component {
	renderPlayers() {
		if (this.props.players.length === 0) {
			return (
				<div className="item">
					<p className="item__message ">
						Please enter your first player to start keeping score
					</p>
				</div>
			);
		} else {
			return this.props.players.map(player => {
				return <Player key={player._id} player={player} />;
			});
		}
	}
	render() {
		return (
			<div>
				<FlipMove maintainContainerHeight={true}>
					{this.renderPlayers()}
				</FlipMove>
			</div>
		);
	}
}

export default PlayerList;
