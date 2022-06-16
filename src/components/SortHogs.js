import React, { useState } from "react";

function SortHogs({handleSort}){
    const [isYes , setIsYes] = useState(false)
    function handleGreased(){
        setIsYes(!isYes) 
        console.log(handleSort(isYes,"",""));
    }
    function handleSearch (e){
        const name = e.target.name
        var value = e.target.value
        if (name === "name") return handleSort("",value,"");
        return handleSort("","",value)
    }


    return (
        <>
            <p> Do you want search for hogs based on name or weight ? (enter your search in the empty field )</p>
            <form>
                <label> Name : </label>
                <input onChange={handleSearch} name="name" type="text"></input>
                <label > weight : </label>
                <input onChange={handleSearch} name="weight" type="text"></input>
            </form>
            <br></br>
            <button onClick={handleGreased}> greased ?</button>
        </>
    )
}

export default SortHogs;