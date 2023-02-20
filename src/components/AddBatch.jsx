import React from 'react'
import DataContext from '../context/DataContext';
import manuf from '../JSON/Manufacture.json'
import Alert from './Alert';
const AddBatch = (props) => {
    const context = React.useContext(DataContext);
    const { AddBatches } = context;


    const [batch, setBatch] = React.useState({ Bname: "" })
    const [manu, setManu] = React.useState("");
    // const [manu, setSelManu] = React.useState({ manu: "" });
    const [id, setId] = React.useState("");
    // const [alert, setAlert] = React.useState(null);

    React.useEffect(() => {
        // setManu(manufacturer);
        setManu(props.Mname);
        setId(props.id)
    }, [manu])
    // handle Change
    const handleChange = (e) => {
        // console.log()
        setBatch({ ...batch, [e.target.name]: e.target.value })
        // setAlert(null);
    }

    const handleSeleted = (e) => {
        // setSelManu({ ...selManu, [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value })
        // manufacturer.map((val) => {
        //     if (val.name === e.target.value) {
        //         setSelId(val["_id"]);
        //     }
        // })
    }

    // handling submitting 
    const handleSubmit = (e) => {
        e.preventDefault();
        // setAlert(null);
    }

    // handling Clicking
    const handleClick = () => {
        console.log(batch);
        // console.log(selManu);
        if (batch.Bname == "") {
            alert("Enter the Batch name");
        } else {
            console.log(manu)
            console.log(id);
            AddBatches({ name: batch.Bname, id: id })
            setBatch({ Bname: "" });
        }
    }
    return (
        <div className='container my-2'>
            {/* <Alert alert={alert} /> */}
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="row g-3 align-items-center">
                    <div className='row align-item-center'>
                        <div className="col-auto">
                            <label htmlFor="Mname" className="col-form-label primary">Manufacture Name:</label>
                        </div>
                        <div className="col-auto my-2">
                            {manu}
                        </div>
                        {/* <div className="col-auto">
                            <select name='manu' onChange={(e) => { handleSeleted(e) }} className="form-select" aria-label="Default select example"> */}
                        {/* <option select="true">Open this select menu</option> */}
                        {/* {manu.map((val, key) => { return (<option select="true" key={key}>{val.name}</option>) })}
                            </select>
                        </div> */}
                    </div>
                    <div className='row align-item-center'>
                        <div className="col-auto">
                            <label htmlFor="Bname" className="col-form-label primary mx-3 pr-1">Batch Name</label>
                        </div>
                        <div className="col-auto mx-2">
                            <input
                                name="Bname"
                                type="text"
                                className="form-control"
                                onChange={(e) => { handleChange(e) }}
                                value={batch.Bname}
                            />
                        </div>
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <button className='btn btn-primary my-2'
                        type='submit' onClick={() => { handleClick() }}>
                        submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default AddBatch