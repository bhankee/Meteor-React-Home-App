import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const ProductNav = () =>
	<div className="navList">
		<Link to="/" className="navList">
			Home
		</Link>
		<Link to="/paint" className="navList">
			Paint
		</Link>
		<Link to="/appliances" className="navList">
			Appliances
		</Link>
		<Link to="/hardware" className="navList">
			Hardware
		</Link>
		<Link to="/flooring" className="navList">
			Flooring
		</Link>
	</div>;

export default ProductNav;
