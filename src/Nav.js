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
				<Link className="navbarMenu" to={'/'}>
					<img className="menuButton" alt="home Button" src="img/home.png"/>
				</Link>
				<Link className="navbarMenu" to={'/search'}>
					<img className="menuButton" alt="search Button" src="img/search.png"/>
				</Link>
				<Link className="navbarMenu" to={'/QnA'}>
					<img className="menuButton" alt="Q&A Button" src="img/QnA.png"/>
				</Link>
			</div>
		</div>
	)
}