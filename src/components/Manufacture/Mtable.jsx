import React from 'react'
import Manufacturer from '../../JSON/Manufacture.json';
const Mtable = (props) => {
    let up = 0;
    let {manuf} = props; 
    const [manu, setManu] = React.useState([]);
    React.useEffect(() => {
        setManu(Manufacturer.manufacture);
    }, [])

    const handleClick = (e)=> {
        // console.log(e);
        manuf(e);
    }
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col" colSpan="1">Batch Name</th>
                        <th scope="col" colSpan="2">Added Dated</th>
                    </tr>
                </thead>
                {manu.length !== 0 ?
                    // if the data is present
                    <tbody>
                        {manu.map((e, key) => {
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
    )
}

export default React.memo(Mtable);