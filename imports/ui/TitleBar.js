import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TitleBar extends React.Component {
	renderSubtitle() {
		if (this.props.subtitle) {
			return (
				<h2 className="title-bar_subTitle">
					{this.props.subtitle}
				</h2>
			);
		}
	}

	render() {
		return (
			<div className="title-bar">
				<div className="wrapper">
					<h1>{this.props.title}</h1>
					{this.renderSubtitle()}{' '}
				</div>
			</div>
		);
	}
}

export default TitleBar;
