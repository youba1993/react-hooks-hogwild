import React, {  useState } from "react";
import Details from "./Details";

function Tile({tile}){
   
    const [show , setShow] = useState(false)
      const handleClick = (e) => {
            setShow(!show)
        }

    return (
        <div className="pigTile" onClick={handleClick} >
                <img className="imgTil" src={tile.image} alt={tile.name}></img>
                <h3>{tile.name}</h3>
                {show ? <Details data={tile}/> : null}
                   
        </div>
    )
}

export default Tile;