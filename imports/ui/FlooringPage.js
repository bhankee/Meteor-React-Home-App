import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductNav from './ProductNav';

class AppliancePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemBrand: ['Kmart'],
			itemDescription: ['coffee maker'],
			itemModel: ['5678'],
			itemRoom: ['Kitchen']
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		//Brads cool
	}

	handleSubmit(e) {
		e.preventDefault();
		var updateBrand = this.state.itemBrand;
		updateBrand.push(this.refs.brand.value);

		var updateDescription = this.state.itemDescription;
		updateDescription.push(this.refs.description.value);

		var updateModel = this.state.itemModel;
		updateModel.push(this.refs.model.value);

		var updateRoom = this.state.itemRoom;
		updateRoom.push(this.refs.room.value);

		this.setState({
			itemBrand: updateBrand,
			itemDescription: updateDescription,
			itemModel: updateModel,
			itemRoom: updateRoom
		});
	}

	render() {
		var itemBrandArr = this.state.itemBrand;

		var itemDescriptionArr = this.state.itemDescription;

		var itemModelArr = this.state.itemModel;

		var itemRoomArr = this.state.itemRoom;
		itemRoomArr = itemRoomArr.map((room, index) =>
			<div className="row">
				<div className="col-xs-2">
					<li className="list-group-item text-center" key={room}>
						{itemBrandArr[index]}
						<li className="list-group-item text-left">
							{itemDescriptionArr[index]}
						</li>
						<li className="list-group-item text-left">
							{itemModelArr[index]}
						</li>
						<li className="list-group-item text-left">
							{itemRoomArr[index]}
						</li>
					</li>
				</div>
			</div>
		);

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
									ref="description"
									value={this.props.value}
									onChange={this.props.onChange}
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
									ref="model"
									value={this.props.value}
									onChange={this.props.onChange}
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
									ref="room"
									value={this.props.value}
									onChange={this.props.onChange}
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
							{itemRoomArr}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default AppliancePage;
