import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductNav from './ProductNav';
import { Paint } from '../api/Paint';

class PaintPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		Paint.insert({
			brand: e.target.brand.value,
			color: e.target.color.value,
			sheen: e.target.sheen.value,
			room: e.target.room.value
		});
	}

	render() {
		var paintArr = Paint.find().fetch();

		const paintData = function(list) {
			return list.map(function(paint) {
				return (
					<div
						className=" text-center item-container"
						key={paint._id}
					>
						<p>
							Brand: {paint.brand}
						</p>
						<p>
							Color: {paint.color}
						</p>
						<p>
							Sheen: {paint.sheen}
						</p>
						<p>
							Room: {paint.room}
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
								Paint Brand
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
							<label htmlFor="color" className="input">
								Color
							</label>
							<div className="field">
								<input
									type="text"
									name="color"
									className="form-control"
									placeholder="Color"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-4" />
						<div className="col-xs-4">
							<label htmlFor="brand" className="input">
								Sheen
							</label>
							<div className="field">
								<input
									type="text"
									name="sheen"
									className="form-control"
									placeholder="Sheen"
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
					{paintData(paintArr)}
				</div>
			</div>
		);
	}
}

export default PaintPage;
