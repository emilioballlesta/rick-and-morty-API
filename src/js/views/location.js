import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Location = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Rick and Morty Locations </h1>

			<ul ClassName="list-group">
				{store.location.map((item, index) => {
					return <li key={index}> {item.name}</li>;
				})}
			</ul>
		</div>
	);
};
