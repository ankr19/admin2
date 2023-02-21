import moment from 'moment/moment';
import React from 'react'
import DataContext from '../../context/DataContext';
import Manufacturer from '../../JSON/Manufacture.json';
import AddManu from '../AddManu';
const Mtable = (props) => {
    let up = 0;

    const context = React.useContext(DataContext);
    let { allManu, deleteManu } = context;
    let { manuf, manufacturer } = props;
    
    // // const [manu, setManu] = React.useState([]);
    React.useEffect(() => {
        allManu();

        // setManu(manufacturer;
    }, [])

    const handleClick = (e) => {
        // console.log(e);
        manuf(e);
    }

    const handleClick2 = (e) =>{
        // console.log(e['_id']);
        deleteManu(e['_id'])
    }

    return (
        <div className='container'>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Manufacturer Details</h6>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col" colSpan="1">Batch Name</th>
                                <th scope="col" colSpan="2">Added Dated</th>
                            </tr>
                        </thead>
                        {manufacturer.length !== 0 ?
                            // if the data is present
                            <tbody>
                                {manufacturer.map((e, key) => {
                                    return (<tr key={key}>
                                        <th scope="row">{++up}</th>
                                        <td colSpan="1">
                                            <button type='submit' onClick={() => handleClick(e)} className='btn btn-outline-primary'>
                                                {e.name}
                                            </button>
                                        </td>
                                        <td colSpan="2">{moment(e['addedDate']).format('DD/MM/YYYY, HH:MM:SS')}</td>
                                        {/* <i className="bi bi-trash3-fill"></i> */}
                                        <td colSpan="1"><button className='btn btn-outline-secondary' onClick={()=>{handleClick2(e)}}>delete<i className="bi bi-trash3-fill"></i></button></td>
                                    </tr>)
                                })}

                            </tbody>
                            :
                            // if the data is not present
                            <tbody>
                                <tr>
                                    <th scope='row'>{++up}</th>
                                    <td>No data</td>
                                    <td>No data</td>
                                </tr>
                            </tbody>

                        }
                    </table>
                </div>
                <p>
                    <button className="btn btn-primary mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Add Manufacturer
                    </button>
                </p>
                <div className="collapse container my-2" id="collapseExample">
                    <div className="card card-body">
                        <AddManu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Mtable);