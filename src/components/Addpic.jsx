import React from 'react'
import Batch from '../JSON/Batch.json';

const Addpic = () => {
    const [batch, setBatch] = React.useState([]);
    const [selBat, setSelBat] = React.useState("");
    const [selId, setSelId] = React.useState("");
    const [pic, setPic] = React.useState("")

    React.useEffect(() => {
        setBatch(Batch.batch);
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        setPic(e.target.value);
    }
    const handleSelect = (e) => {
        console.log(e.target.value);
        setSelBat(e.target.value);
        Batch.batch.map((val) => {
            if (val.name === e.target.value) {
                setSelId(val.id);
            }
        })
    }
    const handleClick = () => {
        console.log(selBat + " " + pic);
        console.log(selId);
        // setSelBat("")
        // setSelId("");
        setPic("")
    }
    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="row g-3 align-item-center">
                    <div className="row align-item-center my-2">
                        <div className="col-auto">
                            <label htmlFor="batch" className="col-form-label primary">Batch Name</label>
                        </div>
                        <div className="col-auto">
                            <select
                                name="batch"
                                id=""
                                className="form-select" aria-label="Default select example"
                                onChange={(e) => { handleSelect(e) }}
                            >
                                {batch.map((val, key) => {
                                    return (<option select="true" key={key}>{val.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row align-item-center">
                        <div className="col-auto">
                            <label htmlFor="picName" className='col-form-label primary pr-2'>Pic Name</label>
                        </div>
                        <div className="col-auto mx-2">
                            <input
                                type="text"
                                name='pic'
                                className="form-control"
                                onChange={(e) => { handleChange(e) }}
                                value={pic}
                            />
                        </div>
                    </div>
                </div>
                <button
                    className="btn btn-primary my-2"
                    onClick={() => handleClick()}
                >
                    submit
                </button>
            </form>
        </div>
    )
}

export default Addpic