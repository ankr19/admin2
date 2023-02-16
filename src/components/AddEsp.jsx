import React from 'react'

const AddEsp = () => {
    // adding manufacturer name and password
    const [manu, setManu] = React.useState({ Mname: "", password: "" });

    // handle Change
    const handleChange = (e) => {
        // console.log()
        setManu({ ...manu, [e.target.name]: e.target.value })
    }

    // handling submitting 
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // handling Clicking
    const handleClick = () => {
        console.log(manu);
        setManu({ Mname: "", password: "" })
    }
    return (
        <div className='container'>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="row g-3 align-items-center">
                    <div className='row align-item-center'>
                        <div className="col-auto">
                            <label htmlFor="Mname" className="col-form-label primary">Manufacture Name</label>
                        </div>
                        <div className="col-auto">
                            <input
                                name='Mname'
                                type="text"
                                className="form-control"
                                onChange={(e) => { handleChange(e) }}
                                value={manu.Mname}
                            />
                        </div>
                    </div>
                    <div className='row align-item-center my-2'>
                        <div className="col-auto">
                            <label htmlFor="password" className="col-form-label primary mx-4">Password</label>
                        </div>
                        <div className="col-auto mx-3">
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                onChange={(e) => { handleChange(e) }}
                                value={manu.password}
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