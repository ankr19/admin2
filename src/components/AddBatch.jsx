import React from 'react'
import manuf from '../JSON/Manufacture.json'
import Alert from './Alert';
const AddBatch = () => {
    const [batch, setBatch] = React.useState({ Bname: "" })
    const [manu, setManu] = React.useState([]);
    const [selManu, setSelManu] = React.useState({ manu: "" });
    const [selId, setSelId] = React.useState("");
    const [alert, setAlert] = React.useState(null);
    
    React.useEffect(() => {
        setManu(manuf.manufacture);
        
    }, [])
    // handle Change
    const handleChange = (e) => {
        // console.log()
        setBatch({ ...batch, [e.target.name]: e.target.value })
        // setAlert(null);
    }

    const handleSeleted = (e) => {
        setSelManu({ ...selManu, [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value })
        manuf.manufacture.map((val) => {
            if (val.name === e.target.value) {
                setSelId(val.id);
            }
        })
    }

    // handling submitting 
    const handleSubmit = (e) => {
        e.preventDefault();
        setAlert(null);
    }

    // handling Clicking
    const handleClick = () => {
        console.log(batch);
        console.log(selManu);
        console.log(selId);
        
        if (batch.Bname && selId) {
            setAlert({
                type: "success",
                msg: "added the batch"
            });
        }
        else {
            setAlert({
                type: "danger",
                msg: "batch is not added"
            });
        }
        setBatch({ Bname: "" });
        // setAlert(null);
        // setSelManu({manu:""})
    }
    return (
        <div className='container'>
            <Alert alert={alert} />
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="row g-3 align-items-center">
                    <div className='row align-item-center'>
                        <div className="col-auto">
                            <label htmlFor="Mname" className="col-form-label primary">Manufacture Name</label>
                        </div>
                        <div className="col-auto">
                            <select name='manu' onChange={(e) => { handleSeleted(e) }} className="form-select" aria-label="Default select example">
                                {/* <option select="true">Open this select menu</option> */}
                                {manu.map((val, key) => { return (<option select="true" key={key}>{val.name}</option>) })}
                            </select>
                        </div>
                    </div>
                    <div className='row align-item-center my-2'>
                        <div className="col-auto">
                            <label htmlFor="password" className="col-form-label primary mx-3">Batch Name</label>
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
                <button className='btn btn-primary my-2'
                    type='submit' onClick={() => { handleClick() }}>
                    submit
                </button>
            </form>
        </div>
    )
}

export default AddBatch