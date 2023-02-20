import axios from 'axios';
import React from 'react'
import DataContext from '../context/DataContext'

const DataState = (props) => {
    const [manufacturer, setManufacturer] = React.useState([])
    let api = 'http://localhost:5001/api/v1/';
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    let addManu = async (value) => {
        let data = {name:value.name}
        // console.log(data);
        // console.log(`${api}addSingleManufacturer`)
        // console.log(config);
        const val = await axios.post(`${api}addSingleManufacturer`,data,config);
        console.log(val.data);
    }

    let allManu = async()=>{
        const response = await axios.get(`${api}getAllManufacturers`)
        console.log(response.data.body);
        setManufacturer(response.data.body);
    }
    return (
        <DataContext.Provider value={{addManu, allManu, manufacturer}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState