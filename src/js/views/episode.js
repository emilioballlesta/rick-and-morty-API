import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Episode = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Rick and Morty Episodes </h1>

			<ul ClassName="list-group">
				{store.episode.map((item, index) => {
					return <li key={index}> {item.name}</li>;
				})}
			</ul>
		</div>
	);
};
