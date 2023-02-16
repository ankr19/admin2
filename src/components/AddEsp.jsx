import React from 'react'

const AddEsp = () => {
    // adding manufacturer name and password
    // const [manu, setManu] = React.useState([]);
    const [esp, setEsp] = React.useState({espname:"", espid:""})
    // handle Change
    const handleChange = (e) => {
        // console.log()
        setEsp({ ...esp, [e.target.name]: e.target.value })
    }

    // handling submitting 
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // handling Clicking
    const handleClick = () => {
        console.log(esp);
        setEsp({ espname: "", espid: "" })
    }
    return (
        <div className='container'>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="row g-3 align-items-center">
                    <div className='row align-item-center'>
                        <div className="col-auto">
                            <label htmlFor="espname" className="col-form-label primary mx-3 ">Esp Name</label>
                        </div>
                        <div className="col-auto">
                            <input
                                name='espname'
                                type="text"
                                className="form-control"
                                onChange={(e) => { handleChange(e) }}
                                value={esp.espname}
                            />
                        </div>
                    </div>
                    <div className='row align-item-center my-2'>
                        <div className="col-auto">
                            <label htmlFor="espid" className="col-form-label primary mx-3 pr-2">Esp Id    </label>
                        </div>
                        <div className="col-auto mx-3">
                            <input
                                name="espid"
                                type="text"
                                className="form-control"
                                onChange={(e) => { handleChange(e) }}
                                value={esp.espid}
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

export default AddEsp