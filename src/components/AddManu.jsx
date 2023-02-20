import React from 'react'
import DataContext from '../context/DataContext';

const AddManu = (props) => {
    // adding manufacturer name and password
    const context = React.useContext(DataContext);
    const { addManu } = context;
    const [manu, setManu] = React.useState({ name: "", password: "" });

    // handle Change
    const handleChange = (e) => {
        // console.log()
        setManu({ ...manu, [e.target.name]: e.target.value })
    }

    // handling submitting 
    const handleSubmit = (e) => {
        e.preventDefault();
        // props.AddValue(manu)
    }

    // handling Clicking
    const handleClick = () => {
        console.log(manu);
        addManu(manu);

        setManu({ name: "", password: "" })
    }
    return (
        <div className='container my-2'>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="row g-3 align-items-center">
                    <div className='row justify-content-center'>
                        <div className="col-auto">
                            <label htmlFor="Mname" className="col-form-label primary">Manufacture Name</label>
                        </div>
                        <div className="col-auto">
                            <input
                                name='name'
                                type="text"
                                className="form-control"
                                onChange={(e) => { handleChange(e) }}
                                value={manu.name}
                            />
                        </div>
                    </div>
                    <div className='row justify-content-center my-2'>
                        <div className="col-auto pr-4">
                            <label htmlFor="password" className="col-form-label primary ">Password</label>
                        </div>
                        <div className="col-auto">
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

export default AddManu