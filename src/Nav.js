import { Link } from "react-router-dom";
import React from "react";
import './css/Nav.css';

export default function Nav() {
	return (
		<div>
			<div className="navbar">
				<Link to={'/'}>
					<img className="logo" alt="logo" src="img/logo.png"/>
				</Link>
				<Link className="navbarMenu" to={'/'}>Main</Link>
				<Link className="navbarMenu" to={'/search'}>About</Link>
				<Link className="navbarMenu" to={'/QnA'}>Contact</Link>
			</div>
		</div>
	)
}