import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const ProductNav = () =>
	<div className="houseItems">
		<Link to="/" className="houseItems">
			Home
		</Link>
		<Link to="/paint" className="houseItems">
			Paint
		</Link>
		<Link to="/appliances" className="houseItems">
			Appliances
		</Link>
		<Link to="/hardware" className="houseItems">
			Hardware
		</Link>
		<Link to="/flooring" className="houseItems">
			Flooring
		</Link>
	</div>;

export default ProductNav;
