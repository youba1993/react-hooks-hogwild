import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import SortHogs from "./SortHogs"

import hogs from "../porkers_data";

function App() {
	const [hogFilter, setHogFilter] = useState(hogs);
	function handleSort(toggle,name,weight){
		if(toggle !="") setHogFilter(hogs.filter((item)=>item.greased !== false)) ;
		else if(name !=="") setHogFilter(hogs.filter((item)=>item.name === name))
		else if(weight !=="") setHogFilter(hogs.filter((item)=>item.weight === parseFloat(weight)))
		else setHogFilter(hogs)	
	}

	return (
		<div className="App">
			<Nav />
			<br></br>
			<SortHogs  handleSort={handleSort}/>
			<div className="divTil">
			{hogFilter.map((tile)=>
			<Tile key={tile.name} tile={tile} />
			)}
			</div>
			
				
		</div>
	);
}

export default App;
