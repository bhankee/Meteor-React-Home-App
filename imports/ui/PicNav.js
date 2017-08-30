import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const PicNav = () =>
	<div className="houseItems">
		<div className="row">
			<div className="col-md-6">
				<Link to="/paint" className="houseItems">
					<div className="iconContainer">
						<img
							className="imgStyle"
							src="/paint.png"
							alt="Smiley face"
						/>
						<p className="centerCaption">Paint</p>
					</div>
				</Link>
			</div>
			<div className="col-md-6">
				<Link to="/appliances" className="houseItems">
					<div className="iconContainer">
						<img
							className="imgStyle"
							src="/appliances.png"
							alt="Smiley face"
						/>
						<p className="centerCaption">Appliances</p>
					</div>
				</Link>
			</div>
		</div>
		<div className="row">
			<div className="col-md-6">
				<Link to="/hardware" className="houseItems">
					<div className="iconContainer">
						<img
							className="imgStyle"
							src="/hardware.png"
							alt="Smiley face"
						/>
						<p className="centerCaption">Hardware</p>
					</div>
				</Link>
			</div>
			<div className="col-md-6">
				<Link to="/flooring" className="houseItems">
					<div className="iconContainer">
						<img
							className="imgStyle"
							src="/flooring.png"
							alt="Smiley face"
						/>
						<p className="centerCaption">Flooring</p>
					</div>
				</Link>
			</div>
		</div>
	</div>;

export default PicNav;
