import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Rick and Morty API</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-light">Home</button>
				</Link>
				<Link to="/characters">
					<button className="btn btn-light">Characters</button>
				</Link>
				<Link to="/location">
					<button className="btn btn-light">Locations</button>
				</Link>
				<Link to="/episode">
					<button className="btn btn-light">Episodes</button>
				</Link>
			</div>
		</nav>
	);
};
