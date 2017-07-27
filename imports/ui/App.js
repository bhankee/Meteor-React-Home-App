import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Players } from './../api/players';
import Player from './/Player';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends React.Component {
	render() {
		return (
			<div>
				<TitleBar
					title={this.props.title}
					subtitle="Created by Brad Hankee"
				/>
				<div className="wrapper">
					<PlayerList players={this.props.players} />
					<AddPlayer />
				</div>
			</div>
		);
	}
}

export default App;
