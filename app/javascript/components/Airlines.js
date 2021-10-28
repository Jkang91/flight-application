import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Airlines() {
const [airlines, setAirlines] = useState([])

useEffect(() => {
    //Get all of our airlines from our api
    //Update airlines in our state
    axios.get('/api/v1/airlines.json')
    .then( resp => {
        setAirlines(resp.data.data)
    } )
    .catch( resp => console.log(resp) )
}, [airlines.length])

const list = airlines.map(item => {
    return (
        <li key={item.attributes.name}>{item.attributes.name}</li>
    )
})
    return (
        <>
            <div>This is the Airlines index view for our app</div>
            <ul>{list}</ul>
        </>
    )
}

export default Airlines
