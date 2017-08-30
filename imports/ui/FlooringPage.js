import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductNav from './ProductNav';
import { Flooring } from '../api/Flooring';

class FlooringPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		Flooring.insert({
			brand: e.target.brand.value,
			color: e.target.descripton.value,
			model: e.target.model.value,
			room: e.target.room.value
		});
	}

	render() {
		var flooringArr = Flooring.find().fetch();

		const flooringData = function(list) {
			return list.map(function(flooring) {
				return (
					<div
						className=" text-center item-container"
						key={flooring._id}
					>
						<p>
							Brand: {flooring.brand}
						</p>
						<p>
							Desciption: {flooring.discription}
						</p>
						<p>
							Model: {flooring.model}
						</p>
						<p>
							Room: {flooring.room}
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
								Item Number
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
							{flooringData(flooringArr)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default FlooringPage;
