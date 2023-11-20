import { useEffect, useState } from "react";

const PuppyList = () => {
    const [allPuppyList, setAllPuppyList] = useState([])

    useEffect(() => {
        const getPuppies = async() => {
            const responce = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players');
            const responceJson = await responce.json();
            const allPuppies = responceJson.data.players;
            console.log(allPuppies)
        }
        getPuppies();
    }, []);

    return(
        <>
        <h1>Puppy List</h1>

        <ol>allPuppies</ol>
        


        
        
        
        
        </>
    )
}

export default PuppyList;