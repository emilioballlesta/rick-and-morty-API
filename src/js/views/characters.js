import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/demo.scss";

export const Characters = props => {
	console.log(props.match.params.Id);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (props.match.params.id !== undefined) {
			actions.loadAllCharacters(props.match.params.id);
		}
	}, []);

	return (
		<>
			{
				<div className="container">
					<h1>Rick and Morty Characters </h1>

					<div>
						<div className="container">
							{store.characters.map((item, index) => {
								return (
									<div key={index}>
										<div className="card h-100 col-lg-4 col-md-4 mb-4">
											<img className="card-img-top" src={item.image} alt="" />
											<div className="card-body">
												<h4 className="card-title">{item.name}</h4>
												<p className="card-text">{item.species}</p>
											</div>
											<div className="card-footer">
												<a href={item.url} className="btn btn-primary">
													Press here to look the API source
												</a>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			}
		</>
	);
};

Characters.propTypes = { match: PropTypes.any };
