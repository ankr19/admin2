import React from 'react'
import DataContext from '../../context/DataContext';
import Pic from '../../JSON/Pic.json';
const MPic = (props) => {
    let context = React.useContext(DataContext);
    let { allPicForBatches } = context;
    let { bid, Bname } = props;
    let up = 0;
    const [pic, setPic] = React.useState([]);
    React.useEffect(() => {
        console.log(bid);
        const pd = [];
        allPicForBatches({id:bid})
        Pic.pic.map((value) => {
            if (bid == value.bid) {
                pd.push(value);
            }
        })
        setPic(pd);
    }, [bid])
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Pic Details</h6>
                </div>
                <div className="card-body">
                    <label htmlFor="Mname" className='col-form-label primary'> Batch Name: {Bname}</label>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col" colSpan="2">Pic Name</th>
                                <th scope="col" colSpan="1">Previous Verison</th>
                                <th scope="col" colSpan="1">Updated Verison</th>
                                <th scope="col" colSpan="2">Added Dated</th>
                            </tr>
                        </thead>
                        {pic.length !== 0 ?
                            // if the data is present
                            <tbody>
                                {pic.map((e, key) => {
                                    return (<tr key={key}>
                                        <th scope="row">{++up}</th>
                                        <td colSpan="2">
                                            <button className='btn btn-outline-primary'>
                                                {e.picname}
                                            </button>
                                        </td>
                                        <td colSpan="1">{e['pre-V']}</td>
                                        <td colSpan="1">{e['Upd-V']}</td>
                                        <td colSpan="2">{e['Update Dated']}</td>
                                    </tr>)
                                })}

                            </tbody>
                            :
                            // if the data is not present
                            <tbody>
                                <tr>
                                    <th scope='row'>{++up}</th>
                                    <td colSpan="2">No data</td>
                                    <td colSpan="1">No data</td>
                                    <td colSpan="1">No data</td>
                                    <td colSpan="2">No data</td>
                                </tr>
                            </tbody>

                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MPic