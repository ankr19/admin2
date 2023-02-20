import moment from 'moment';
import React from 'react'
import DataContext from '../../context/DataContext';
import Batch from '../../JSON/Batch.json';
import AddBatch from '../AddBatch';
const MBatch = (props) => {
    let context = React.useContext(DataContext);
    let { allBatchesForManufacturer, Batches } = context;
    const { Mname, id, bid } = props;
    let up = 0;
    // const [batch, setBatch] = React.useState([]);
    const [pic, setPic] = React.useState("");
    React.useEffect(() => {
        console.log(id);
        allBatchesForManufacturer({ id });
        // console.log(batch);
    }, [id, ])
    const handleClick = (e) => {
        // console.log(e);
        bid(e);
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Batches Details</h6>
                </div>
                <div className="card-body">
                    <label htmlFor="Mname" className='col-form-label primary'> Manufacterer Name: {Mname}</label>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col" colSpan="1">Batch Name</th>
                                <th scope="col" colSpan="2">Added Dated</th>
                            </tr>
                        </thead>
                        {Batches.length !== 0 ?
                            // if the data is present
                            <tbody>
                                {Batches.map((e, key) => {
                                    return (<tr key={key}>
                                        <th scope="row">{++up}</th>
                                        <td colSpan="1">
                                            <button type='submit' onClick={() => handleClick(e)} className='btn btn-outline-primary'>
                                                {e.name}
                                            </button>
                                        </td>
                                        <td colSpan="2">{moment(e['batchDate']).format("DD/MM/YYYY, HH:MM:SS")}</td>
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
                <div className="container">
                <p>
                    <button className="btn btn-primary mx-2" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseExample2" 
                    aria-expanded="false" 
                    aria-controls="collapseExample2">
                        Add Batch
                    </button>
                </p>
                <div className="collapse container my-2" id="collapseExample2">
                    <div class="card card-body">
                        <AddBatch Mname={Mname} id={id} />
                    </div>
                </div>
            </div>
            </div>
            

        </div>
    )
}

export default MBatch