const urlAPI = "https://rickandmortyapi.com/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			episode: [],
			location: [],
			active: undefined
		},
		actions: {
			loadAllCharacters: () => {
				fetch(`${urlAPI}/character`)
					.then(resp => resp.json())
					.then(data => {
						getActions().setListCharacters(data.results);
					});
			},

			loadCharacters: id => {
				fetch(`${urlAPI}/character/${id}`)
					.then(resp => resp.json())
					.then(data => {
						setStore({ active: data });
					});
			},

			loadAllLocations: () => {
				fetch(`${urlAPI}/location`)
					.then(resp => resp.json())
					.then(data => {
						getActions().setListLocation(data.results);
					});
			},

			loadAllEpisodes: () => {
				fetch(`${urlAPI}/episode`)
					.then(resp => resp.json())
					.then(data => {
						getActions().setListEpisode(data.results);
					});
			},

			setListCharacters: list => {
				setStore({ characters: list });
			},

			setListLocation: list => {
				setStore({ location: list });
			},

			setListEpisode: list => {
				setStore({ episode: list });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
