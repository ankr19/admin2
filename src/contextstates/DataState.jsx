import axios from 'axios';
import React from 'react'
import DataContext from '../context/DataContext'

const DataState = (props) => {
    const [manufacturer, setManufacturer] = React.useState([])
    const [Batches, setBatches] = React.useState([]);
    const [Pics, setPics] = React.useState([]);
    const [update, setUpdate] = React.useState([]);
    let api = 'http://localhost:5001/api/v1/';
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    let allManu = async () => {
        const response = await axios.get(`${api}getAllManufacturers`)
        console.log(response.data.body);
        setManufacturer(response.data.body);
    }

    let addManu = async (value) => {
        let data = { name: value.name }
        // console.log(data);
        // console.log(`${api}addSingleManufacturer`)
        // console.log(config);
        const val = await axios.post(`${api}addSingleManufacturer`, data, config);
        console.log(val.data);
        allManu();
        // setManufacturer()
    }

    let allBatchesForManufacturer = async (value) => {
        console.log(value.id)
        // params
        config['params'] = {
            manufacturerId: value.id
        }
        console.log(config);
        //getBatchesforManufacturer?manufacturerId=63f318927ca01c2164b23f78
        const response = await axios.get(`${api}getBatchesforManufacturer`, config);
        // console.log(response.data.body);
        setBatches(response.data.body);
    }


    let AddBatches = async (value) => {
        console.log(value);
        let data = {
            name: value.name,
            manufacturerId: value.id,
        }
        const response = await axios.post(`${api}addSingleBatch`, data, config)
        // console.log(response.data);
        allBatchesForManufacturer(value);
    }

    let allPicForBatches = async (value) => {
        let obj = []
        // console.log(value);
        config['params'] = {
            id: value.id
        }
        const response = await axios.get(`${api}getPicsforBatches`, config);
        let projectedPics = response.data.body;
        obj = projectedPics.projectedPics.projectedPics
        // console.log(response.data.body);
        setUpdate(obj);
        setPics(projectedPics.singleBatch);
    }

    // deleting the manufactuer
    


    return (
        <DataContext.Provider value={{ addManu, allManu, manufacturer, AddBatches, allBatchesForManufacturer, Batches, allPicForBatches, Pics, update, }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState