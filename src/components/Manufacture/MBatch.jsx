import React from 'react'
import Batch from '../../JSON/Batch.json';
const MBatch = (props) => {
    const { Mname, id, bid } = props;
    let up = 0;
    const [batch, setBatch] = React.useState([]);
    const [pic, setPic] = React.useState("");
    React.useEffect(() => {
        console.log(id);
        const ad = [];
        Batch.batch.map((value) => {
            if (id === value.mid) {
                ad.push(value)
            }
        })
        setBatch(ad);
    }, [id])
    const handleClick = (e) =>{
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
                        {batch.length !== 0 ?
                            // if the data is present
                            <tbody>
                                {batch.map((e, key) => {
                                    return (<tr key={key}>
                                        <th scope="row">{++up}</th>
                                        <td colSpan="1">
                                            <button type='submit' onClick={() => handleClick(e)} className='btn btn-outline-primary'>
                                                {e.name}
                                            </button>
                                        </td>
                                        <td colSpan="2">{e['Added Dated']}</td>
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
            </div>
        </div>
    )
}

export default MBatch