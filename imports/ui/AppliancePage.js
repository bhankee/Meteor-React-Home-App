import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductNav from './ProductNav';
import { Appliances } from '../api/Appliances';

class AppliancePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		Appliances.insert({
			brand: e.target.brand.value,
			color: e.target.descripton.value,
			model: e.target.model.value,
			room: e.target.room.value
		});
	}

	render() {
		var appliancesArr = Appliances.find().fetch();

		const appliancesData = function(list) {
			return list.map(function(appliance) {
				return (
					<div
						className=" text-center item-container"
						key={appliance._id}
					>
						<p>
							Brand: {appliance.brand}
						</p>
						<p>
							Desciption: {appliance.discription}
						</p>
						<p>
							Model: {appliance.model}
						</p>
						<p>
							Room: {appliance.room}
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
								Room
							</label>
							<div className="field">
								<input
									type="text"
									name="room"
									className="form-control"
									placeholder="Room"
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
							{appliancesData(appliancesArr)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default AppliancePage;
