import React from "react";

function Details({data}){

    return (
        <>
         <ul name="list">
                    <li> specialty : {data.specialty}</li>
                    <li> weight : {data.weight}</li>
                    <li> greased :{data.greased ? "Yes" : "No"}</li>
                    <li> highest medal achieved : {data["highest medal achieved"]}</li>
          </ul>
        </>
    )
}


export default Details;