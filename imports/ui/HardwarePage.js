import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductNav from './ProductNav';
import { Hardware } from '../api/Hardware';

class HardwarePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		Hardware.insert({
			brand: e.target.brand.value,
			color: e.target.descripton.value,
			model: e.target.model.value,
			room: e.target.room.value
		});
	}

	render() {
		var hardwareArr = Hardware.find().fetch();

		const hardwareData = function(list) {
			return list.map(function(hardware) {
				return (
					<div
						className=" text-center item-container"
						key={hardware._id}
					>
						<p>
							Brand: {hardware.brand}
						</p>
						<p>
							Desciption: {hardware.discription}
						</p>
						<p>
							Model: {hardware.model}
						</p>
						<p>
							Room: {hardware.room}
						</p>
					</div>
				);
			});
		};

		return (
			<div>
				<div className="row">
					<div className="col-xs-4">
						<ProductNav />
					</div>
				</div>
				<form className="form" onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-xs-4" />
						<div className="col-xs-4">
							<label htmlFor="brand" className="input">
								Brand
							</label>
							<div className="field">
								<input
									type="text"
									name="brand"
									className="form-control"
									placeholder="Brand/Company"
									ref="brand"
									value={this.props.value}
									onChange={this.props.onChange}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-4" />
						<div className="col-xs-4">
							<label htmlFor="discription" className="input">
								Description
							</label>
							<div className="field">
								<input
									type="text"
									name="descripton"
									className="form-control"
									placeholder="Description"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-4" />
						<div className="col-xs-4">
							<label htmlFor="model" className="input">
								Model Number
							</label>
							<div className="field">
								<input
									type="text"
									name="model"
									className="form-control"
									placeholder="Model"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-4" />
						<div className="col-xs-4">
							<label htmlFor="room" className="input">
								Room & Fixture
							</label>
							<div className="field">
								<input
									type="text"
									name="room"
									className="form-control"
									placeholder="Room & Fixture"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12"> </div>
						<input
							className="btn btn-primary btn-lg button-buffer"
							type="submit"
							value="Input"
						/>
					</div>
				</form>
				<div>
					<div>
						<ul className="list-group">
							{hardwareData(hardwareArr)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default HardwarePage;
