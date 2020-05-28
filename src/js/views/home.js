import React from "react";
import RickMorty from "../../img/rick-and-morty.png";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Rick and Morty API</h1>
		<p>
			App with all the information of your favorite television show, created using the Rick and Morty API
			available in <a href="https://rickandmortyapi.com/">https://rickandmortyapi.com/</a>
		</p>
		<p>
			<img src={RickMorty} />
		</p>
	</div>
);
